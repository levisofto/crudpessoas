import { ApiProperty } from '@nestjs/swagger';
import { Address } from 'src/entity/address.entity';

export class PersonRegister {
  @ApiProperty({ type: String, description: 'nome', example: 'Rafael Levi' })
  nome: string;

  @ApiProperty({ type: Number, description: 'cpf', example: "\"12345678912\"" })
  cpf: string;

  @ApiProperty({
    type: Address,
    description: 'Endereço',
    example: [
      {
        state: "Bahia",
        city: "Vitória da Conquista",
        neighborhood: "Felícia",
        street: "Rua I"
      }
    ],
    required: true,
  })
  address: Address;
}

export class PersonList {
  @ApiProperty({ type: Number, description: 'id', example: 1 })
  id: number;

  @ApiProperty({ type: String, description: 'nome', example: 'Rafael Levi' })
  nome: string;

  @ApiProperty({ type: Number, description: 'cpf', example: "\"12345678912\"" })
  cpf: string;

  @ApiProperty({
    type: Address,
    description: 'endereço',
    example: [
      {
        id: 1,
        state: 'Bahia',
        city: 'Vitória da Conquista',
        neighborhood: 'Felícia',
        street: 'Rua I'
      }
    ]
  })
  address: Address;
}

export class PersonUpdate {
  @ApiProperty({
    type: String,
    description: 'nome',
    example: 'Rafael Levi',
    required: false,
  })
  nome: string;

  @ApiProperty({
    type: Number,
    description: 'cpf',
    example: "\"12345678912\"",
    required: false,
  })
  cpf: string;

  @ApiProperty({
    type: Address,
    description: 'Endereço',
    example: [
      {
        id: 1,
        state: 'Bahia',
        city: 'Vitória da Conquista',
        neighborhood: 'Felícia',
        street: 'Rua I'
      }
    ],
    required: false,
  })
  address: Address;
}
