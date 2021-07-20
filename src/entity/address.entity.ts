import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './person.entity';
import { City } from './city.entity';

@Entity('address')
export class Address extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;

  @ManyToOne(() => City)
  @JoinColumn()
  city: City;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @ManyToOne(() => Person)
  @JoinColumn()
  person: Person;
}
