import { IsNotEmpty, Length, IsNumberString, IsString } from 'class-validator';
export class CreatePersonDto {
  @IsNotEmpty()
  @IsString()
	nome: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(9, 9)
	cpf: string;
}
