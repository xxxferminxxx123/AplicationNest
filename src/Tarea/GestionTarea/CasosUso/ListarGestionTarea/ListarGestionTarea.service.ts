import { Injectable } from '@nestjs/common';
import { Tarea  } from '../../Entidad/Dto/Tarea.dto';

@Injectable()
export class ListarGestionTareaService {
    
    ListarTareas(){
        return[
            {
                 id          : 1
                ,title       : "some title"
                ,description : "some description"
            }
        ]
    }
}
