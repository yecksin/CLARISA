import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { InnovationCharacteristic } from './entities/innovation-characteristic.entity';
import { InnovationCharacteristicRepository } from './repositories/innovation-characteristic.repository';

@Injectable()
export class InnovationCharacteristicService {
  constructor(
    private innovationCharacteristicsRepository: InnovationCharacteristicRepository,
  ) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<InnovationCharacteristic[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.innovationCharacteristicsRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.innovationCharacteristicsRepository.find({
          where: {
            is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<InnovationCharacteristic> {
    return await this.innovationCharacteristicsRepository.findOneBy({
      id,
      is_active: true,
    });
  }

  /*async update(
    updateUserDtoList: UpdateInnovationCharacteristicDto[],
  ): Promise<InnovationCharacteristic[]> {
    return await this.innovationCharacteristicsRepository.save(
      updateUserDtoList,
    );
  }*/
}
