import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoriasModule } from './categorias/categorias.module';
import { Categoria } from './categorias/entities/categoria.entity';
import { Produto } from './produtos/entities/produto.entity';
import { ProdutoModule } from './produtos/produtos.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    /* TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_ecommerce',
      entities: [Produto, Categoria, Usuario],
        synchronize: true,
      }), */
      TypeOrmModule.forRoot({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        logging: false,
        dropSchema: false,
        ssl: {
          rejectUnauthorized: false,
        },
        synchronize: true,
        autoLoadEntities: true,
      }),  
      ProdutoModule, 
      CategoriasModule,
      AuthModule,
      UsuarioModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
