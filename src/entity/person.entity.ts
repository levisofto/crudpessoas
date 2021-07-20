import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';

@Entity('person')
export class Person extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nome: string;

  @Column({ unique: true })
  cpf: string;

  @OneToMany(
    () => Address,
    address => address.person,
    { cascade: ['insert', 'update', 'remove'] }
  )
  address: Address[];
}
