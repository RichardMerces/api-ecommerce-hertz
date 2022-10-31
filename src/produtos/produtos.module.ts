import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { ProdutosController } from './controllers/produtos.controller';
import { ProdutosService } from './services/produtos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProdutosService],
  controllers: [ProdutosController],
  exports: [TypeOrmModule]
})
export class ProdutoModule {}