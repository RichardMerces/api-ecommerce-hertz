import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categorias/categorias.module';
import { Categoria } from './categorias/entities/categoria.entity';
import { ClienteModule } from './cliente/cliente.module';
import { Cliente } from './cliente/entities/cliente.entity';
import { Produto } from './produtos/entities/produto.entity';
import { ProdutoModule } from './produtos/produtos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_ecommerce',
      entities: [Produto, Categoria, Cliente],
        synchronize: true,
      }),
      ProdutoModule, 
      CategoriaModule,
      ClienteModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
