import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProdutosController } from './produtos.controller';
import { produtosProviders } from './produtos.providers';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProdutosController],
  providers: [
    ...produtosProviders,
    ProdutosService,
  ],
})
export class ProdutoModule {}