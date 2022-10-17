
import { PartialType } from '@nestjs/mapped-types';
import { Exclude } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { CreateCategoriaDto } from './create-categoria.dto';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {

    @IsOptional()
    @IsString()
    name: string;
    
    @IsOptional()
    @IsString()
    tipo: string; 
    
    @IsOptional()
    @IsString()
    descricao: string;
}
