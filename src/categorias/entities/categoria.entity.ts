import { Produto } from "../../produtos/entities/produto.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { IsNotEmpty } from "class-validator";


@Entity({name: "tb_categorias"})
export class Categoria{
    
    @PrimaryGeneratedColumn()
    idCategoria: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    tipo : string;
    
    @Column({length: 255, nullable: false})
    descricao: string;

    @OneToMany(() => Produto ,(produto) => produto.categoria)
    produto:Produto[] 
}

