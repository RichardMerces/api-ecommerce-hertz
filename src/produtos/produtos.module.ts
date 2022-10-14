import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { produtosProviders } from './produtos.providers';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...produtosProviders,
    ProdutosService,
  ],
})
export class produtosModule {}