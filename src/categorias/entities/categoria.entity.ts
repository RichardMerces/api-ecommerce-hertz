import { Produto } from "../../produtos/entities/produto.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger/dist";


@Entity({name: "tb_categorias"})
export class Categoria{
    
    @PrimaryGeneratedColumn()
    @ApiProperty()
    idCategoria: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty()
    nome: string;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty()
    tipo : string;
    
    @Column({length: 255, nullable: false})
    @ApiProperty()
    descricao: string;


    @ApiProperty({type: ()=> Produto})
    @OneToMany(() => Produto ,(produto) => produto.categoria)
    produto:Produto[] 
}

