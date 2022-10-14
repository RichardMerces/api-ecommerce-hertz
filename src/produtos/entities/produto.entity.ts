import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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


}