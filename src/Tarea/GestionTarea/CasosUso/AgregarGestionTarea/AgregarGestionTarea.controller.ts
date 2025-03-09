import { Controller, Get ,Post,Body } from '@nestjs/common';
import { RUTA_PRINCIPAL } from '../../Ruta/RutaPrincipal/RutaPrincipal'
import { RUTA_DIRECCION } from '../../Ruta/RutaDireccion/RutaDireccion'
import { TaskServiceAgregar } from './AgregarGestionTarea.service';
import { Tarea  } from '../../Entidad/Dto/Tarea.dto';

@Controller(RUTA_PRINCIPAL.MAIN) 
export class TaskControllerAgregar {
    
    constructor(private tasksServices : TaskServiceAgregar ){}

    @Post(RUTA_DIRECCION.AGREGAR) 
    AgregarTarea(@Body() tarea: Tarea){

        return this.tasksServices.AgregarTareas(tarea);
    }

}
