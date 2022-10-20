import { Categoria } from "src/categorias/entities/categoria.entity";
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


@ManyToOne(()=> Categoria ,(categoria) =>categoria.produto, {
    onDelete:"CASCADE", nullable: false

})
categoria:Categoria
}