import { IsNumber, IsString } from "class-validator"

export class CreateCategoriaDto {

    @IsNumber()
    idCategoria: number;

    @IsString()
    name: string;
    
    @IsString()
    tipo: string; 

    @IsString()
    descricao: string;
}
