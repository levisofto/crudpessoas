import { ApiProperty } from '@nestjs/swagger';
import { ListAddressDto } from 'src/people/dto/list-address.dto';
import { Address } from '../../entity/address.entity';

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
        cityId: 1,
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
        state: 'Bahia',
        city: 'Salvador',
        neighborhood: 'Felícia',
        street: 'Rua I'
      }
    ]
  })
  address: ListAddressDto;
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
        cityId: 1,
        neighborhood: 'Felícia',
        street: 'Rua I'
      }
    ],
    required: false,
  })
  address: Address;
}
