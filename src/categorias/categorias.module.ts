import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CategoriasProviders } from './categorias.providers';
import { CategoriasService } from './categorias.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...CategoriasProviders,
    CategoriasService,
  ],
})
export class PhotoModule {}
