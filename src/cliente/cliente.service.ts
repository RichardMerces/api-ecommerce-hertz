import { Injectable, Inject } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { ILike, Repository, DeleteResult } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @Inject('CLIENTE_REPOSITORY')
    private clientesRepository: Repository<Cliente>
  ) {}

  async findAll(): Promise<Cliente[]> {
    return await this.clientesRepository.find();
  }

  async findById(idCliente: number): Promise<Cliente> {

    let cliente = await this.clientesRepository.findOne({
      
      /* 
      where: {
        idCliente
      }
*/
    });

    if(!cliente) {

      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

    }
    return cliente; 

  }
  
  async findByName(nome: string): Promise<Cliente[]> {

    return await this.clientesRepository.find({

      where:{

        name: ILike(`%${nome}%`)

      }
    });  
  }

  async create(createClienteDto: CreateClienteDto): Promise<CreateClienteDto> {
    return this.clientesRepository.save(createClienteDto);
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    return this.clientesRepository.update(id, updateClienteDto);
  }

  async delete(id: number): Promise<DeleteResult> {

    let buscaCliente = await this.findById(id);

    if (!buscaCliente) {
        throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)
    }
    return await this.clientesRepository.delete(id);
  }
}
