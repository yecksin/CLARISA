import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({type: 'tinyint'})
  is_cgiar_user: boolean;

  @Column()
  created_by: number; //!Revisar relacion

  @Column()
  active_since: Date;

  @Column()
  modified_by: number; //!Revisar relacion

  @Column()
  modification_justification: string;

  @Column({type: 'tinyint'})
  is_active: boolean;

  @Column()
  last_login: Date;

  @Column({type: 'tinyint'})
  auto_save: boolean;

  @Column({type: 'tinyint'})
  agree_terms: boolean;


  hashPassword(): void {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }

  checkPassword(password: string): boolean {
    try {
      return bcrypt.compareSync(password, this.password);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

}