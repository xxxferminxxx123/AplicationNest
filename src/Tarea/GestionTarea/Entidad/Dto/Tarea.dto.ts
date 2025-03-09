
enum TaskSatus {
    PEDING         = 'PEDING'
   ,IN_PROGRESS    = 'IN_PROGRESS'
   ,FINALLY        = 'FINALLY'
}

export class Tarea {
   id              : string;
   title           : string;
   description     : string;
   //status          : TaskSatus;
}