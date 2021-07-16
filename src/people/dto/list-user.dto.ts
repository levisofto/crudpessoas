import { Address } from '../../entity/address.entity';
export class ListPersonDto {
  id: number;
  nome: string;
  cpf: string;
  address: Address[];
}
