import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { InitiativeOutcomeDto } from '../dto/initiative-outcomes.dto';

export class EndOfInitiativeOutcome {
  @PrimaryGeneratedColumn()
  initiativeId: number;

  @Column()
  initiativeOfficialCode: string;

  @Column()
  initiativeName: string;

  @Column()
  initiativeStageName: string;

  @Column()
  initiativeOutcomes: InitiativeOutcomeDto;
}
