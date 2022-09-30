import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ApiOST } from './api.ost';
import { Initiative } from 'src/api/initiative/entities/initiative.entity';
import { WorkpackageRepository } from 'src/api/workpackage/repositories/workpackage.repository';
import { InitiativeRepository } from 'src/api/initiative/repositories/initiative.repository';
import { WorkpackageOstDto } from './dto/workpackage.ost.dto';
import { InitiativeOstDto } from './dto/initivative.ost.dto';
import { firstValueFrom } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { InitiativeStage } from 'src/api/initiative/entities/initiative-status.entity';
import { Repository } from 'typeorm';
import { InitiativeStageOstDto } from './dto/initiative-stage.ost.dto';

@Injectable()
export class CronOST {
  private readonly logger: Logger = new Logger(CronOST.name);

  constructor(
    private readonly api: ApiOST,
    private readonly workpackageRepository: WorkpackageRepository,
    private readonly initiativeRepository: InitiativeRepository,
    @InjectRepository(InitiativeStage)
    private readonly initiativeStageRepository: Repository<InitiativeStage>,
  ) {}

  //@Cron(CronExpression.EVERY_MINUTE)
  public async updateWorkpackages() {
    this.api.getWorkpackages().subscribe({
      next(value) {
        let response: WorkpackageOstDto[] = value.data?.response
          ?.workpackages as WorkpackageOstDto[];
        console.log(response);
      },
    });
    this.logger.debug('workpackages');
  }

  public async cronInitiativeRelatedData() {
    let oldInitiativesDb: Initiative[] = await this.initiativeRepository.find();
    let updatedInitiativesDb: Initiative[] = [];
    let newInitiativesDb: Initiative[] = [];

    let oldInitiativeStagesDb: InitiativeStage[] =
      await this.initiativeStageRepository.find();
    let updatedInitiativeStagesDb: InitiativeStage[] = [];
    let newInitiativeStagesDb: InitiativeStage[] = [];

    const initiativesRequest = await firstValueFrom(this.api.getInitiatives());

    if (initiativesRequest.status === HttpStatus.OK) {
      const initiativesOST: InitiativeOstDto[] =
        initiativesRequest.data?.response?.initiatives ?? [];
      let newInitiatives: InitiativeOstDto[] = CronOST.getNewInitiatives(
        oldInitiativesDb,
        initiativesOST,
      );

      oldInitiativesDb.forEach((i) => {
        const initiativeOst: InitiativeOstDto = CronOST.updateInitiative(
          i,
          initiativesOST,
        );

        if (initiativeOst) {
          let currentInitiativeStages: InitiativeStage[] =
            oldInitiativeStagesDb.filter((is) => is.initiative_id === i.id);

          let newInitiativeStages: InitiativeStageOstDto[] =
            CronOST.getNewInitiativeStatus(
              i,
              currentInitiativeStages,
              initiativeOst.stages ?? [],
            );

          currentInitiativeStages.forEach((is) => {
            CronOST.updateInitiativeStages(
              is,
              initiativeOst,
              initiativeOst.stages ?? [],
            );
            updatedInitiativeStagesDb.push(is);
          });

          newInitiativeStages.forEach((nis) => {
            let newInitiativeStage: InitiativeStage =
              CronOST.createNewInitiativeStage(nis, initiativeOst, i);
            newInitiativeStagesDb.push(newInitiativeStage);
          });
        }

        updatedInitiativesDb.push(i);
      });

      newInitiatives.forEach((ni) => {
        let newInitiative: Initiative = CronOST.createNewInitiative(ni);

        (ni.stages ?? []).forEach((nis) => {
          let newInitiativeStage: InitiativeStage =
            CronOST.createNewInitiativeStage(nis, ni, newInitiative);
          newInitiative.initiativeStages.push(newInitiativeStage);
        });

        newInitiativesDb.push(newInitiative);
      });

      updatedInitiativesDb = await this.initiativeRepository.save(
        updatedInitiativesDb,
      );

      newInitiativesDb = await this.initiativeRepository.save(newInitiativesDb);

      newInitiativesDb.forEach((ni) => {
        ni.initiativeStages.forEach((nis) => {
          nis.initiative_id = ni.id;
          newInitiativeStagesDb.push(nis);
        });
      });

      updatedInitiativeStagesDb = await this.initiativeStageRepository.save(
        updatedInitiativeStagesDb,
      );

      newInitiativeStagesDb = await this.initiativeStageRepository.save(
        newInitiativeStagesDb,
      );
    }

    this.logger.debug('Finished workpackages synchronization');
  }

  private static getNewInitiatives(
    initiativesDb: Initiative[],
    initiativesOST: InitiativeOstDto[],
  ): InitiativeOstDto[] {
    return initiativesOST.filter(
      (ost) =>
        !initiativesDb.find((db) => db.official_code === ost.official_code),
    );
  }

  private static createNewInitiative(
    ostInitiative: InitiativeOstDto,
  ): Initiative {
    let newInitiative: Initiative = new Initiative();

    newInitiative.created_at = new Date();
    newInitiative.is_active = ostInitiative.active === 1;
    newInitiative.name = ostInitiative.name;
    newInitiative.official_code = ostInitiative.official_code;
    newInitiative.short_name = ostInitiative.acronym;
    newInitiative.updated_at = new Date();

    newInitiative.initiativeStages = [];

    return newInitiative;
  }

  private static updateInitiative(
    initiative: Initiative,
    ostInitiatives: InitiativeOstDto[],
  ): InitiativeOstDto {
    let ostInitiative: InitiativeOstDto = ostInitiatives.find(
      (oi) => oi.official_code === initiative.official_code,
    );

    if (ostInitiative) {
      initiative.is_active = ostInitiative.active === 1;
      initiative.name = ostInitiative.name;
      initiative.short_name = ostInitiative.acronym;
    } else {
      initiative.is_active = false;
    }

    initiative.updated_at = new Date();

    return ostInitiative;
  }

  private static getNewInitiativeStatus(
    initiative: Initiative,
    initiativeStagesDb: InitiativeStage[],
    initiativeStagesOst: InitiativeStageOstDto[],
  ): InitiativeStageOstDto[] {
    return initiativeStagesOst.filter(
      (ost) =>
        !initiativeStagesDb.find(
          (db) => db.initiative_id === ost.id && db.stage_id === db.stage_id,
        ),
    );
  }

  private static createNewInitiativeStage(
    ostInitiativeStage: InitiativeStageOstDto,
    ostInitiative: InitiativeOstDto,
    dbInitiative: Initiative,
  ): InitiativeStage {
    let newInitiativeStage: InitiativeStage = new InitiativeStage();

    newInitiativeStage.action_area_id = +ostInitiative.action_area_id;
    newInitiativeStage.created_at = new Date();
    newInitiativeStage.initiative_id = dbInitiative.id;
    newInitiativeStage.is_active = ostInitiativeStage.active === 1;
    //TODO: uncoment when ost send this field
    //newInitiativeStage.is_global_dimension = ostInitiativeStage
    newInitiativeStage.stage_id = ostInitiativeStage.stageId;
    newInitiativeStage.status = ostInitiative.status;
    newInitiativeStage.updated_at = new Date();

    return newInitiativeStage;
  }

  private static updateInitiativeStages(
    initiativeStage: InitiativeStage,
    ostInitiative: InitiativeOstDto,
    ostInitiativeStages: InitiativeStageOstDto[],
  ): InitiativeStageOstDto {
    let ostInitiativeStage: InitiativeStageOstDto = ostInitiativeStages.find(
      (ois) => ois.stageId === initiativeStage.stage_id,
    );

    if (ostInitiativeStage) {
      initiativeStage.action_area_id = +ostInitiative.action_area_id;
      initiativeStage.is_active = ostInitiativeStage.active === 1;
      //TODO: uncoment when ost send this field
      //initiativeStage.is_global_dimension = ostInitiative;
      initiativeStage.status = ostInitiative.status;
    } else {
      initiativeStage.is_active = false;
    }

    initiativeStage.updated_at = new Date();

    return ostInitiativeStage;
  }
}
