import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from 'src/categorias/categorias.module';
import { CategoriasService } from 'src/categorias/categorias.service';
import { Produto } from './entities/produto.entity';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  providers: [ProdutosService, CategoriasService],
  controllers: [ProdutosController],
  exports: [TypeOrmModule]
})
export class ProdutoModule {}