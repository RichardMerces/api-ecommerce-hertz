import { IsString } from "class-validator";
import { IsNumber } from "class-validator";

export class CreateProdutoDto {

@IsString()
nome: string ;

@IsString()
descricao: string ;

@IsNumber()
preco: number ;

@IsString()
foto_produto: string ;
}
