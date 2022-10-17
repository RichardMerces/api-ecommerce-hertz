import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateClienteDto {
    
    @IsString()
    name: string; 
    
    @IsEmail()
    email: string; 
    
    @IsString()
    @MinLength(8)
    password: string; 

    @IsString()
    foto: string;
}
