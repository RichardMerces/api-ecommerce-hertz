import { Entity,PrimaryGeneratedColumn,Column} from 'typeorm';

@Entity()
export class Cliente {
@PrimaryGeneratedColumn()
id:Number;

@Column({length:100})
name:string;

@Column({length:100})
email:string;

@Column ({length:100})
password:string;

@Column ({length:100})
foto:string;

}
