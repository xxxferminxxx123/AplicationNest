
enum TaskSatus {
    PEDING         = 'PEDING'
   ,IN_PROGRESS    = 'IN_PROGRESS'
   ,FINALLY        = 'FINALLY'
}

export class Tarea {
   id              : number;
   title           : string;
   description     : string;
   //status          : TaskSatus;
}