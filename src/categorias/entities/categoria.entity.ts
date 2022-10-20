import { Produto } from "src/produtos/entities/produto.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";


@Entity({name: "tb_categorias"})
export class Categoria{
    @PrimaryGeneratedColumn()
    idCategoria: number;

    @Column({length: 100, nullable: false})
    nome: string;

    @Column({length: 100, nullable: false})
    tipo : string;
    
    @Column({length: 255, nullable: false})
    descricao: string;

    @OneToMany(() => Produto ,(produto) => produto.categoria)
       
    produto:Produto[]
    
}
   



