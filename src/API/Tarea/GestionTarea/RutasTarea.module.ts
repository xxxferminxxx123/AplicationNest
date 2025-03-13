import { Module } from '@nestjs/common';
import { ListarGestionTareaController } from './CasosUso/ListarGestionTarea/ListarGestionTarea.controller';
import { ListarGestionTareaService } from './CasosUso/ListarGestionTarea/ListarGestionTarea.service';
import { AgregarGestionTareaService } from './CasosUso/AgregarGestionTarea/AgregarGestionTarea.service';
import { AgregarGestionTareaController } from './CasosUso/AgregarGestionTarea/AgregarGestionTarea.controller';
import { EliminarGestionTareaService } from './CasosUso/EliminarGesitonTarea/EliminaGestionTarea.service';
import { EliminarGestionTareaController } from './CasosUso/EliminarGesitonTarea/EliminarGestionTarea.controller';
import { ModificarGestionTareaService } from './CasosUso/ModificarGestionTarea/ModificarGestionTarea.service';
import { ModificarGestionTareaController } from './CasosUso/ModificarGestionTarea/ModificarGestionTarea.controller';

@Module({
  controllers: [
     ListarGestionTareaController
    ,AgregarGestionTareaController
    ,EliminarGestionTareaController
    ,ModificarGestionTareaController
  ],
  providers: [
    ListarGestionTareaService
    ,AgregarGestionTareaService
    ,EliminarGestionTareaService
    ,ModificarGestionTareaService
  ]
})
export class RutasTarea {}
