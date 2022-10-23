import { IsString, IsNumber } from "class-validator";
import { Categoria } from "src/categorias/entities/categoria.entity";
import { Cliente } from "src/cliente/entities/cliente.entity";

export class CreateProdutoDto {

@IsString()
nome: string ;

@IsString()
descricao: string ;

@IsNumber()
preco: number ;

@IsString()
foto_produto: string ;

categoria: Categoria;

cliente: Cliente;

}
