import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';

@Entity('person')
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nome: string;

  @Column({ unique: true })
  cpf: string;

  @OneToMany(() => Address, address => address.person, { cascade: ['insert', 'update'] })
  @ValidateNested() //to do: n precisava, apenas no class validator
  @Type(() => Address) //to do: n precisava, apenas no class validator
  address: Address[];
}
