import { IsNotEmpty, Length, IsNumberString, IsString, IsArray } from 'class-validator';
import { Address } from '../../entity/address.entity';
export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
	nome: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(9, 11)
	cpf: string;

  @IsNotEmpty()
  @IsArray()
  address: Address[];
}
