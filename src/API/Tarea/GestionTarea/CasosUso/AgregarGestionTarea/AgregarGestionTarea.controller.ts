import { Controller, Get ,Post,Body } from '@nestjs/common';
import { RUTA_PRINCIPAL } from '../../Ruta/RutaPrincipal/RutaPrincipal'
import { RUTA_DIRECCION } from '../../Ruta/RutaDireccion/RutaDireccion'
import { AgregarGestionTareaService } from './AgregarGestionTarea.service';
import { Tarea  } from '../../Entidad/Dto/Tarea.dto';

@Controller(RUTA_PRINCIPAL.MAIN) 
export class AgregarGestionTareaController {
    
    constructor(private tasksServices : AgregarGestionTareaService ){}

    @Post(RUTA_DIRECCION.AGREGAR) 
    AgregarTarea(@Body() tarea: Tarea){

        return this.tasksServices.AgregarTareas(tarea);
    }

}
