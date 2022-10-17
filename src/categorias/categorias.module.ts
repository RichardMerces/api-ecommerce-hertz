import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CategoriasController } from './categorias.controller';
import { CategoriasProviders } from './categorias.providers';
import { CategoriasService } from './categorias.service';

@Module({
  imports: [DatabaseModule], 
  controllers: [CategoriasController],
  providers: [
    ...CategoriasProviders,
    CategoriasService,
  ],
})
export class CategoriaModule {}
