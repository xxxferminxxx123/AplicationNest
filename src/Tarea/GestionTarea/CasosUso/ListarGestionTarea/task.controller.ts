import { Controller, Get, Post, Body} from '@nestjs/common';
import { RUTA_PRINCIPAL } from '../../Ruta/RutaPrincipal/RutaPrincipal'
import { RUTA_DIRECCION } from '../../Ruta/RutaDireccion/RutaDireccion'
import { TaskService } from '../ListarGestionTarea/task.service';


@Controller(RUTA_PRINCIPAL.MAIN)
export class TaskController {
    
    constructor(private tasksServices : TaskService ){}

    @Get(RUTA_DIRECCION.LISTAR)
    ListarGestionTarea (){
        return this.tasksServices.ListarTareas();
    }


}
