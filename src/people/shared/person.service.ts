import { Injectable } from "@nestjs/common";
import { Person } from "./person";

@Injectable()

export class PersonService {
    people: Person[] = [
      { id:1, nome: 'Teste', cpf:'123123123'  },
      { id:2, nome: 'Teste1', cpf:'2312312'  },
      { id:3, nome: 'Teste2', cpf:'123214124123123'  },
      { id:4, nome: 'Teste3', cpf:'13123'  },
      { id:5, nome: 'Teste4', cpf:'231'  },
      { id:6, nome: 'Teste5', cpf:'11231223123123'  },
      { id:7, nome: 'Teste6', cpf:'231123'  },
      { id:8, nome: 'Teste7', cpf:'123231123123'  },
      { id:9, nome: 'Teste8', cpf:'2131'  },
      { id:10, nome: 'Teste9', cpf:'123312321123123'  },
 

    ];

    getAll(){
       return this.people;
    }

    getById(id: number){
       const person = this.people.find((value) => value.id == id);
       return person;
    }

    create(person: Person){
       let lastId = 0;
       if(this.people.length > 0){
              lastId = this.people[this.people.length - 1].id;
       }

       person.id = lastId + 1;
       this.people.push(person);

       return person;
    }

    update(person: Person){
        const personArray = this.getById(person.id);
        if (personArray){
            personArray.nome = person.nome;
            personArray.cpf = person.cpf;
        }
       
        return personArray;

    }

    delete(id: number){
        const index =  this.people.findIndex((value) => value.id == id);
        this.people.splice(index, 1);
    }


}