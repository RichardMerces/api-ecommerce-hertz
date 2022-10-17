import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categorias/categorias.module';
import { ClienteModule } from './cliente/cliente.module';
import { ProdutoModule } from './produtos/produtos.module';

@Module({
  imports: [ProdutoModule, ClienteModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
