import { Module } from '@nestjs/common';
import { TaskController } from './CasosUso/ListarGestionTarea/task.controller';
import { TaskService } from './CasosUso/ListarGestionTarea/task.service';
import { TaskServiceAgregar } from './CasosUso/AgregarGestionTarea/task.service';
import { TaskControllerAgregar } from './CasosUso/AgregarGestionTarea/taskagregar.controller';

@Module({
  controllers: [
     TaskController
    ,TaskControllerAgregar
  ],
  providers: [
     TaskService
    ,TaskServiceAgregar
  ]
})
export class RutasTarea {}
