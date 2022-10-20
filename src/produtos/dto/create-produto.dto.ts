import { IsString, IsNumber } from "class-validator";
import { Categoria } from "src/categorias/entities/categoria.entity";


export class CreateProdutoDto {

@IsString()
nome: string ;

@IsString()
descricao: string ;

@IsNumber()
preco: number ;

@IsString()
foto_produto: string ;

@IsNumber()
categoria:Categoria;

}
