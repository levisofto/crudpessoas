import { ApiProperty } from '@nestjs/swagger';

export class PersonRegister {
  @ApiProperty({ type: String, description: 'nome', example: 'Rafael Levi' })
  nome: string;

  @ApiProperty({ type: Number, description: 'cpf', example: 12345678912 })
  cpf: string;
}

export class PersonList {
  @ApiProperty({ type: Number, description: 'id', example: 1 })
  id: number;

  @ApiProperty({ type: String, description: 'nome', example: 'Rafael Levi' })
  nome: string;

  @ApiProperty({ type: Number, description: 'cpf', example: 12345678912 })
  cpf: string;
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
    example: 12345678912,
    required: false,
  })
  cpf: string;
}
