import { IsNotEmpty } from "class-validator";
import { Categoria } from "../../categorias/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ApiProperty } from "@nestjs/swagger/dist/decorators";

@Entity({name: 'tb_produtos'})
export class Produto {

    @PrimaryGeneratedColumn() 
    @ApiProperty()
    idProduto:number ;

    @Column({length: 100})
    @ApiProperty()
    nome: string ;

    @Column({length: 255})
    @ApiProperty()
    descricao: string ;

    @Column({ type: "decimal" , precision: 10, scale: 2, default: 0})
    @ApiProperty()
    preco: number ;

    @Column({length: 255})
    @ApiProperty()
    foto_produto: string ;

    @IsNotEmpty()
    @ApiProperty({type:()=> Categoria})
    @ManyToOne(()=> Categoria ,(categoria) =>categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria;

    @ApiProperty({type:()=> Usuario})
    @ManyToOne(()=> Usuario ,(usuario) =>usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}