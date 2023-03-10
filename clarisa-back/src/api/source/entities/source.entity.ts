import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/entities/extends/auditable-entity.entity';
import { GeographicScope } from '../../geographic-scope/entities/geographic-scope.entity';
import { InnovationCharacteristic } from '../../innovation-characteristic/entities/innovation-characteristic.entity';
import { InnovationReadinessLevel } from '../../innovation-readiness-level/entities/innovation-readiness-level.entity';
import { InnovationType } from '../../innovation-type/entities/innovation-type.entity';
import { InstitutionDictionary } from '../../institution-dictionary/entities/institution-dictionary.entity';
import { PolicyStage } from '../../policy-stage/entities/policy-stage.entity';
import { PolicyType } from '../../policy-type/entities/policy-type.entity';

@Entity('sources')
export class Source extends AuditableEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  acronym: string;

  @Column()
  contact_point_id: string;

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
}
