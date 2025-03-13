import { Module } from '@nestjs/common';
import { RutasTarea } from './Tarea/GestionTarea/RutasTarea.module'
@Module({
  imports: [RutasTarea],
})
export class AppModule {}
