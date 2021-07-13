import { IsNotEmpty, Length, IsNumber, IsString } from 'class-validator';
export class UpdatePersonDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  @Length(9, 9)
  cpf: string;
}
