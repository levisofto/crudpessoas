import { Injectable } from "@nestjs/common";
import { Task } from "./task";

@Injectable()

export class TaskService {
    tasks: Task[] = [
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
       return this.tasks;
    }

    getById(id: number){
       const task = this.tasks.find((value) => value.id == id);
       return task;
    }

    create(task: Task){
       let lastId = 0;
       if(this.tasks.length > 0){
              lastId = this.tasks[this.tasks.length - 1].id;
       }

       task.id = lastId + 1;
       this.tasks.push(task);

       return task;
    }

    update(task: Task){
        const taskArray = this.getById(task.id);
        if (taskArray){
            taskArray.nome = task.nome;
            taskArray.cpf = task.cpf;
        }
       
        return taskArray;

    }

    delete(id: number){
        const index =  this.tasks.findIndex((value) => value.id == id);
        this.tasks.splice(index, 1);
    }


}