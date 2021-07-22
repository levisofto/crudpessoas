import { Exclude, Expose, Type } from 'class-transformer';

export class ResponseCityDto {
  
  @Exclude()
  id: number;

  @Expose()
  name: string;

}
