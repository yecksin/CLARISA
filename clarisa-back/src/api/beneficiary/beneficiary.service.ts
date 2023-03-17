import { Injectable } from '@nestjs/common';
import { FindAllOptions } from '../../shared/entities/enums/find-all-options';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';
import { Beneficiary } from './entities/beneficiary.entity';
import { BeneficiaryRepository } from './repositories/beneficiary.repository';

@Injectable()
export class BeneficiaryService {
  constructor(private beneficiaryRepository: BeneficiaryRepository) {}

  async findAll(
    option: FindAllOptions = FindAllOptions.SHOW_ONLY_ACTIVE,
  ): Promise<Beneficiary[]> {
    switch (option) {
      case FindAllOptions.SHOW_ALL:
        return await this.beneficiaryRepository.find();
      case FindAllOptions.SHOW_ONLY_ACTIVE:
      case FindAllOptions.SHOW_ONLY_INACTIVE:
        return await this.beneficiaryRepository.find({
          where: {
            auditableFields: {
              is_active: option === FindAllOptions.SHOW_ONLY_ACTIVE,
            },
          },
        });
      default:
        throw Error('?!');
    }
  }

  async findOne(id: number): Promise<Beneficiary> {
    return await this.beneficiaryRepository.findOneBy({
      id,
      auditableFields: { is_active: true },
    });
  }

  async update(
    updateBeneficiaryDtoList: UpdateBeneficiaryDto[],
  ): Promise<Beneficiary[]> {
    return await this.beneficiaryRepository.save(updateBeneficiaryDtoList);
  }
}
