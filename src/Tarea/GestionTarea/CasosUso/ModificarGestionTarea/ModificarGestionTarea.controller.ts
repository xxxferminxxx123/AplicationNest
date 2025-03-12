import { Controller, Delete, Query, Param, Put, Patch, Body } from '@nestjs/common';
import { RUTA_PRINCIPAL } from '../../Ruta/RutaPrincipal/RutaPrincipal'
import { RUTA_DIRECCION } from '../../Ruta/RutaDireccion/RutaDireccion'
import { ModificarGestionTareaService } from './ModificarGestionTarea.service';
import { Tarea  } from '../../Entidad/Dto/Tarea.dto';

@Controller(RUTA_PRINCIPAL.MAIN) 
export class ModificarGestionTareaController {
    
    constructor(private tasksServices : ModificarGestionTareaService ){}

    @Patch(':id')
    ActualizarTarea( @Param('id') id: number, 
                    @Body() updatedFields: Tarea) 
    {

        const idNumber = Number(id);
        if (isNaN(idNumber)) {
            throw new Error('Id inválido');
        }
        return this.tasksServices.ActualizarTareas(idNumber, updatedFields);
    }

}
