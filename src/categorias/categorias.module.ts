import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { Categoria } from './entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])], 
  providers: [CategoriasService],
  controllers: [CategoriasController],
  exports: [TypeOrmModule]
})
export class CategoriaModule {}
