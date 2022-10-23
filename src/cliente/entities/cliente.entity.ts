import { Produto } from 'src/produtos/entities/produto.entity';
import { Entity,PrimaryGeneratedColumn,Column, OneToMany} from 'typeorm';

@Entity({name: "tb_clientes"})
export class Cliente {
        
    @PrimaryGeneratedColumn()
    idCliente: number;

    @Column({length:100})
    name: string;

    @Column({length:100})
    email: string;

    @Column ({length:100})
    password: string;


    @Column ({length:100})
    foto: string;

    @OneToMany (() => Produto,(produto) => produto.cliente)
    produto: Produto[]

}
