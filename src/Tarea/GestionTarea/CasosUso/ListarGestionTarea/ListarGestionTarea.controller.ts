import { Controller, Get, Post, Body} from '@nestjs/common';
import { RUTA_PRINCIPAL } from '../../Ruta/RutaPrincipal/RutaPrincipal'
import { RUTA_DIRECCION } from '../../Ruta/RutaDireccion/RutaDireccion'
import { ListarGestionTareaService } from './ListarGestionTarea.service';


@Controller(RUTA_PRINCIPAL.MAIN)
export class ListarGestionTareaController {
    
    constructor(private tasksServices : ListarGestionTareaService ){}

    @Get(RUTA_DIRECCION.LISTAR)
    ListarGestionTarea (){
        return this.tasksServices.ListarTareas();
    }


}
