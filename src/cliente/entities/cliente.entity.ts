import { Entity,PrimaryGeneratedColumn,Column} from 'typeorm';

@Entity({name: "tb_clientes"})
export class Cliente {
@PrimaryGeneratedColumn()
idCliente:Number;

@Column({length:100})
name:string;

@Column({length:100})
email:string;

@Column ({length:100})
password:string;

@Column ({length:100})
foto:string;

}
