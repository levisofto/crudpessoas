import { ListAddressDto } from './list-address.dto';
export class ListPersonDto {
  id: number;
  nome: string;
  cpf: string;
  address: ListAddressDto[];
}
