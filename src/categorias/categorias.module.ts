import { HttpException, HttpStatus, Injectable, Module } from "@nestjs/common";
import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaController } from "./controllers/categorias.controller";
import { Categoria } from "./entities/categoria.entity";
import { CategoriasService } from "./services/categorias.service";

@Module({
imports : [TypeOrmModule.forFeature([Categoria])],
providers: [CategoriasService],
controllers: [CategoriaController], //
exports: [TypeOrmModule]
})
export class CategoriasModule {}
