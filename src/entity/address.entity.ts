import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Person } from './person.entity';
import { City } from './city.entity';
import { Expose, Transform } from 'class-transformer';
@Entity('address')
export class Address extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;

  @ManyToOne(() => City)
  @JoinColumn()
  @Expose({ name: 'city', toClassOnly: true })
  @Transform(({ obj }) => obj.data.city.name, { toClassOnly: true })
  city: City;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @ManyToOne(() => Person)
  @JoinColumn()
  person: Person;
}
