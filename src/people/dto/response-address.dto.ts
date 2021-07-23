import { Transform, Exclude, Expose, Type } from 'class-transformer';
import { ResponseCityDto } from './response-city.dto';

export class ResponseAddressDto {
  
  @Exclude()
  id: number;

  @Expose()
  state: string;

  @Expose()
  @Transform(({ value }) => value.name)
  @Type(() => ResponseCityDto)
  city: ResponseCityDto;

  @Expose()
  neighborhood: string;
  
  @Expose()
  street: string;

}
