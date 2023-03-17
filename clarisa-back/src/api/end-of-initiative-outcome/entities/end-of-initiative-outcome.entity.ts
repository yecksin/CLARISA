import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { InitiativeOutcomeDto } from '../dto/initiative-outcomes.dto';

export class EndOfInitiativeOutcome {
  @PrimaryGeneratedColumn({ type: 'bigint' })
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
