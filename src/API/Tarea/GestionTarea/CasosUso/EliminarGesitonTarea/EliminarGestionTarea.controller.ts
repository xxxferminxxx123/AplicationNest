import { Controller, Delete, Query, Param } from '@nestjs/common';
import { RUTA_PRINCIPAL } from '../../Ruta/RutaPrincipal/RutaPrincipal'
import { RUTA_DIRECCION } from '../../Ruta/RutaDireccion/RutaDireccion'
import { EliminarGestionTareaService } from './EliminaGestionTarea.service';

@Controller(RUTA_PRINCIPAL.MAIN) 
export class EliminarGestionTareaController {
    
    constructor(private tasksServices : EliminarGestionTareaService ){}
    private id ='id';

    @Delete(RUTA_DIRECCION.ELIMINAR)
    EliminarTarea(@Query('id') id: number) {

        return this.tasksServices.BorrarTareas(id);
    }

}
