import { IsNumber, IsString } from "class-validator"

export class CreateCategoriaDto {

    @IsString()
    name: string;
    
    @IsString()
    tipo: string; 

    @IsString()
    descricao: string;
}
