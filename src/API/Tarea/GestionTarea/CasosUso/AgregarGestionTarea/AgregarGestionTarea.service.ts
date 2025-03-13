import { Injectable } from '@nestjs/common';
import { Tarea  } from '../../Entidad/Dto/Tarea.dto';
import { MENSAJES } from '../../Constants/Mensajes';

@Injectable()
export class AgregarGestionTareaService {

    private tareas: Tarea[] = []; 

    AgregarTareas( tarea: Tarea ){

        this.tareas.push(tarea);
        return { mensaje: MENSAJES.MENSAJE_AGREGAR, tarea };
    }

}
