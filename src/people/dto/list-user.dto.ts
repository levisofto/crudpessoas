import { Address } from '../../entity/address.entity';
export class ListPersonDto {
  id: number;
  nome: string;
  cpf: string;
  address: Address[]; //to do: vamos supor que há uma tabela de cidades relacionada com endereço.   olhar Lush-Backend/src/reservation/reservation-periods/dtos/response-reservation-period.dto.ts como exemplo
}
