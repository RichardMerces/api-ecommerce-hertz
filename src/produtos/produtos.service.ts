import { Injectable, Inject } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { ILike, Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTOS_REPOSITORY')
    private produtosRepository: Repository<Produto>
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtosRepository.find();
  }

  async findById(idProduto: number): Promise<Produto> {

    let produto = await this.produtosRepository.findOne({

      where: {
        idProduto
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

      }
    });
    
  }
  /* Ainda faltam esses
  create(createProdutoDto: CreateProdutoDto) {
    return 'This action adds a new produto';
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  } */
}
