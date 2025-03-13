import { Injectable } from '@nestjs/common';
import { datos } from '../../Entidad/Dto/DatosTarea.dto'
import { MENSAJES } from '../../Constants/Mensajes';
import { Tarea  } from '../../Entidad/Dto/Tarea.dto';

@Injectable()
export class ModificarGestionTareaService {

    private datos = datos; 

    ObtenerTareasById(id: number): Tarea | null {

        const tarea = this.datos.find((tareas) => tareas.id === id);
        return tarea || null; 
      }
    
      ActualizarTareas(id: number, updatesFields: Tarea) {

        const tareaObtenida = this.ObtenerTareasById(id);
    
        if (!tareaObtenida) {
          throw new Error('Tarea no encontrada');
        }
        Object.assign(tareaObtenida, updatesFields);

        this.datos = this.datos.map((t) => (t.id === id ? tareaObtenida : t));

        return this.datos || null;
     }

}
