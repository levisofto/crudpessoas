import { IsNotEmpty, Length, IsNumberString, IsString } from 'class-validator';
export class UpdatePersonDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(9, 11)
  cpf: string;
}
