import { IsNotEmpty, Length, IsNumberString, IsString, IsArray } from 'class-validator';
import { Address } from '../../entity/address.entity';

export class UpdatePersonDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  @IsArray()
  address: Address[];
}
