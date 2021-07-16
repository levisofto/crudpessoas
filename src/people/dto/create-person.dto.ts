import { IsNotEmpty, Length, IsNumberString, IsString, IsArray } from 'class-validator';
import { Address } from '../../entity/address.entity'; //To do: criar um dto com os atributos para devolver e colocar os validadores
export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
	nome: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(11, 11)
	cpf: string;

  @IsNotEmpty() //to do: usar   @Type(() => ...)
  @IsArray() //to do: usar o  @ValidateNested({ each: true })
  address: Address[];
}
