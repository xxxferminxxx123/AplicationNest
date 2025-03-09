import { Injectable } from '@nestjs/common';
import { Tarea  } from '../../Entidad/Dto/Tarea.dto';

@Injectable()
export class TaskServiceAgregar {

    private tareas: Tarea[] = []; 

    AgregarTareas( tarea: Tarea ){

        this.tareas.push(tarea);
        return { mensaje: "Tarea agregada correctamente", tarea };
    }

}
