import { classToClass, Expose, plainToClass, Type } from 'class-transformer';
import { ResponseAddressDto } from './response-address.dto';

export class ResponsePersonDto {

  @Expose()
  id: number;

  @Expose()
	nome: string;
	
  @Expose()
  cpf: string;

  @Expose()
  @Type(()=>ResponseAddressDto)
  address: ResponseAddressDto[];
  
  static factory(person:any){
    const data = plainToClass(ResponsePersonDto, person);

    return data
  }

}
