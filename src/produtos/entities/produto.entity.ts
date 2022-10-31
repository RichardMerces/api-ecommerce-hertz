import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categorias/entities/categoria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({name: 'tb_produtos'})
export class Produto {

    @PrimaryGeneratedColumn() 
    idProduto:number ;

    @Column({length: 100})
    nome: string ;

    @Column({length: 255})
    descricao: string ;

    @Column({ type: "decimal" , precision: 10, scale: 2, default: 0})
    preco: number ;

    @Column({length: 255})
    foto_produto: string ;

    @IsNotEmpty()
    @ManyToOne(()=> Categoria ,(categoria) =>categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria;

    @IsNotEmpty()
    @ManyToOne(()=> Usuario ,(usuario) =>usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}