import { Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class categorias{
@PrimaryGeneratedColumn()
id: number;

    @Column({length: 100})
    name: string;
    @Column({length: 100})
    tipo : string;
    @Column({length: 40})
    descricao: string;
}
   



