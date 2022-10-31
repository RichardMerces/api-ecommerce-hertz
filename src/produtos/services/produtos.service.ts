import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm'
import { ILike, Repository, DeleteResult } from 'typeorm';
import { Produto } from '../entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtosRepository: Repository<Produto>
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtosRepository.find({

      relations:{
        categoria: true,
        usuario: true
    }
   });
  }

  async findById(idProduto: number): Promise<Produto> {

    let produto = await this.produtosRepository.findOne({

      where: {

        idProduto
        
      }, 
      relations: {

        categoria: true

      } 
      
    });

    if(!produto) {

      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);

    }

    return produto; 

  }
  
  async findByName(nome: string): Promise<Produto[]> {

    return await this.produtosRepository.find({

      where:{

        nome: ILike(`%${nome}%`)

      }, 
      relations: {

        categoria: true

      }
 
    });  

  }

  async create(produto: Produto): Promise<Produto> {
    return this.produtosRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {
    
    let buscaProduto: Produto = await this.findById(produto.idProduto);

    if(!buscaProduto || !produto.idProduto) {
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
      
    }

    return this.produtosRepository.save(produto);
  }

  async delete(id: number): Promise<DeleteResult> {

    let buscaProduto = await this.findById(id);

    if (!buscaProduto) {

        throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)

    }

    return await this.produtosRepository.delete(id);
  }
}
