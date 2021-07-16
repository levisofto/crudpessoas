import { Type } from 'class-transformer';
import { IsNotEmpty, Length, IsNumberString, IsString, IsArray, ValidateNested } from 'class-validator';
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
  @Type(() => Address)
  @ValidateNested({ each: true })
  address: Address[];
}
