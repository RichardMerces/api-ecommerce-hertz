import { Module } from '@nestjs/common';
import { CategoriaModule } from 'src/categorias/categorias.module';
import { CategoriasService } from 'src/categorias/categorias.service';
import { DatabaseModule } from '../database/database.module';
import { ProdutosController } from './produtos.controller';
import { produtosProviders } from './produtos.providers';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [DatabaseModule, CategoriaModule],
  controllers: [ProdutosController],
  providers: [
    ...produtosProviders,
    ProdutosService, CategoriasService
  ],
})
export class ProdutoModule {}