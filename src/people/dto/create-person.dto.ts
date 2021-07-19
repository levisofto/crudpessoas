import { Type } from 'class-transformer';
import { IsNotEmpty, Length, IsNumberString, IsString, IsArray, ValidateNested, ArrayMinSize } from 'class-validator';
import { CreateAddressDto } from './create-address.dto';
export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
	nome: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(11, 11)
	cpf: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => CreateAddressDto)
  @ValidateNested({ each: true })
  address: CreateAddressDto[];
}
