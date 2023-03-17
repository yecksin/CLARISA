import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { GeographicScope } from '../../geographic-scope/entities/geographic-scope.entity';
import { InnovationCharacteristic } from '../../innovation-characteristic/entities/innovation-characteristic.entity';
import { InnovationReadinessLevel } from '../../innovation-readiness-level/entities/innovation-readiness-level.entity';
import { InnovationType } from '../../innovation-type/entities/innovation-type.entity';
import { InstitutionDictionary } from '../../institution-dictionary/entities/institution-dictionary.entity';
import { InstitutionType } from '../../institution-type/entities/institution-type.entity';
import { PolicyStage } from '../../policy-stage/entities/policy-stage.entity';
import { PolicyType } from '../../policy-type/entities/policy-type.entity';
import { User } from '../../user/entities/user.entity';

@Entity('sources')
export class Source {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  acronym: string;

  //relations

  @Column({ type: 'bigint', nullable: true })
  contact_point_id: number;

  //object relations

  @ManyToOne(() => User, (u) => u.source_array)
  @JoinColumn({ name: 'contact_point_id' })
  contact_point_object: User;

  @OneToMany(() => InstitutionDictionary, (id) => id.source_object)
  institution_dictionary_entries: InstitutionDictionary[];

  @OneToMany(() => GeographicScope, (gs) => gs.source_object)
  geographic_scope_array: GeographicScope[];

  @OneToMany(() => InnovationCharacteristic, (ic) => ic.source_object)
  innovation_characteristic_array: InnovationCharacteristic[];

  @OneToMany(() => InnovationReadinessLevel, (irl) => irl.source_object)
  innovation_readiness_level_array: InnovationReadinessLevel[];

  @OneToMany(() => InnovationType, (it) => it.source_object)
  innovation_type_array: InnovationType[];

  @OneToMany(() => PolicyStage, (ps) => ps.source_object)
  policy_stage_array: PolicyStage[];

  @OneToMany(() => PolicyType, (pt) => pt.source_object)
  policy_type_array: PolicyType[];

  @OneToMany(() => InstitutionType, (it) => it.source_object)
  institution_type_array: InstitutionType[];

  //auditable fields

  @Exclude()
  @Column(() => AuditableEntity, { prefix: '' })
  auditableFields: AuditableEntity;
}
