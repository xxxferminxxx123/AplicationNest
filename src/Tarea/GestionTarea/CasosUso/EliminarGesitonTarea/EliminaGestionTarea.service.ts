import { Injectable } from '@nestjs/common';
import { datos } from '../../Entidad/Dto/DatosTarea.dto'
import { MENSAJES } from '../../Constants/Mensajes';

@Injectable()
export class EliminarGestionTareaService {

    private datos = datos; 

    BorrarTareas( id: number ){
        this.datos = this.datos.filter(tarea => tarea.id == id);
        return [{ 
                response:   this.datos
               ,mensaje :   MENSAJES.MENSAJE_ELIMINADO
               ,status  :   'Ok'
        }];
            
    }

}
