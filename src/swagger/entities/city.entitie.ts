import { ApiProperty } from '@nestjs/swagger';

export class CityRegister {

  @ApiProperty({ type: String, description: 'name', example: 'Salvador' })
  name: string;

}

export class CiyList {

  @ApiProperty({ type: Number, description: 'id', example: 1 })
  id: number;

  @ApiProperty({ type: String, description: 'city', example: 'Salvador' })
  name: string;

}

export class CityUpdate {
    
  @ApiProperty({
    type: String,
    description: 'name',
    example: 'Salvador',
    required: true,
  })
  name: string;

}
