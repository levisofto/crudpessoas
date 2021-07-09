import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('person')
export class Person extends BaseEntity{
    
    @PrimaryGeneratedColumn("increment") 
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;
}
