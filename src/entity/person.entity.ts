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

  @OneToMany(() => Address, address => address.personId)
  address: Address[];
}
