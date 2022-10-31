import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Produto } from "../../produtos/entities/produto.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tb_usuario'})
export class Usuario{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @IsEmail()
    @Column({length: 255, nullable: false})
    email: string

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false})
    senha: string

    @Column({length: 5000})
    foto: string

    @OneToMany(()=> Produto ,(produto) =>produto.usuario)
    produto: Produto[];

}