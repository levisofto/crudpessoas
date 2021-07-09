import { ApiProperty } from '@nestjs/swagger';

export class PersonRegister {
  @ApiProperty({ type: String, description: 'name', example: 'Rafael Levi' })
  name: string;

  @ApiProperty({ type: Number, description: 'cpf', example: 12345678912 })
  cpf: string;
}

export class PersonList {
  @ApiProperty({ type: Number, description: 'id', example: 1 })
  id: number;

  @ApiProperty({ type: String, description: 'name', example: 'Rafael Levi' })
  name: string;

  @ApiProperty({ type: Number, description: 'cpf', example: 12345678912 })
  cpf: string;
}

export class PersonUpdate {
  @ApiProperty({
    type: String,
    description: 'name',
    example: 'Rafael Levi',
    required: false,
  })
  name: string;

  @ApiProperty({
    type: Number,
    description: 'cpf',
    example: 12345678912,
    required: false,
  })
  cpf: string;
}
