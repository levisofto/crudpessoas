import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address.entity';

@Entity('city')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Address, address => address.city)
  @JoinColumn()
  address: Address[];
}
