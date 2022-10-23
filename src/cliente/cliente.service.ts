import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { ILike, Repository, DeleteResult } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>
  ) {}

  async findAll(): Promise<Cliente[]> {
    return await this.clientesRepository.find({
      relations: {

        produto: true

      }
    });
  } 

  async findById(idCliente: number): Promise<Cliente> {

    let cliente = await this.clientesRepository.findOne({

      where: {

        idCliente
        
      },
      relations: {

        produto: true

      }

    });

    if(!cliente) {

      throw new HttpException('Cliente não encontrado!', HttpStatus.NOT_FOUND);

    }

    return cliente; 
  }
  
  async findByName(nome: string): Promise<Cliente[]> {

    return await this.clientesRepository.find({

      where:{

        name: ILike(`%${nome}%`)
 
      },
      relations: {

        produto: true

      }
    });
    
  }
  
  async create(createClienteDto: CreateClienteDto): Promise<CreateClienteDto> {
    return this.clientesRepository.save(createClienteDto);
  }
 
  async update(id: number, updateClienteDto: UpdateClienteDto) {

    let buscaCliente = await this.findById(id);

        if (!buscaCliente || !id){

          throw new HttpException('Cliente não encontrada!', HttpStatus.NOT_FOUND);

        }

    return this.clientesRepository.update(id, updateClienteDto);
  }

  async delete(id: number): Promise<DeleteResult> {

    let buscaCliente = await this.findById(id);

    if (!buscaCliente) {

        throw new HttpException('Cliente não encontrada!', HttpStatus.NOT_FOUND)
    }

    return await this.clientesRepository.delete(id);
  } 
}
