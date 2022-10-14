import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity({name: "tb_categorias"})
export class Categorias{
@PrimaryGeneratedColumn()
id: number;

    @Column({length: 100})
    name: string;
    @Column({length: 100})
    tipo : string;
    @Column({length: 40})
    descricao: string;
}
   



