import { Address } from '../../entity/address.entity';
export class ListPersonDto {
  id: number;
  nome: string;
  cpf: string;
  address: Address[]; //to do: 
}

//ao listar todas as pessoas

//no lugar de:  
//"city": {
//   "id": 1,
//   "name": "Salvador"
// }

//deixar assim:
//"city": "Salvador"


//usar https://www.npmjs.com/package/class-transformer