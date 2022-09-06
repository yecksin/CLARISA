import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindAllOptions } from 'src/shared/entities/enums/find-all-options';
import { Repository } from 'typeorm';
import { CreateBeneficiarieDto } from './dto/create-beneficiarie.dto';
import { UpdateBeneficiarieDto } from './dto/update-beneficiarie.dto';
import { Beneficiarie } from './entities/beneficiarie.entity';

@Injectable()
export class BeneficiarieService {
  constructor(
    @InjectRepository(Beneficiarie)
    private beneficiareRepository: Repository<Beneficiarie>,
  ) {}

  async findAll(option : FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE) : Promise<Beneficiarie[]> {
    switch(option){
      case FindAllOptions.SHOW_ALL:
        return await this.beneficiareRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.beneficiareRepository.find({
          where: {
            is_active : option === FindAllOptions.SHOW_ONLY_ACTIVE
          }
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<Beneficiarie> {
    return await this.beneficiareRepository.findOneBy({
      id,
      is_active : true
    });
  }

  async update(updateBeneficiarieDtoList: UpdateBeneficiarieDto[]) : Promise<Beneficiarie[]> {
    return await this.beneficiareRepository.save(updateBeneficiarieDtoList);
  }
}
