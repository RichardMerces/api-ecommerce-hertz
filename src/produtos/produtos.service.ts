import { Injectable, Inject } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { CategoriasService } from 'src/categorias/categorias.service';
import { ILike, Repository, DeleteResult } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTOS_REPOSITORY')
    private produtosRepository: Repository<Produto>,
    private categoriasService: CategoriasService
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtosRepository.find({
      relations: {
        categoria: true
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

  async create(createProdutoDto: CreateProdutoDto): Promise<CreateProdutoDto> {
    if (createProdutoDto.categoria){

      let categoria = await this.categoriasService.findById(createProdutoDto.categoria.idCategoria)

      if (!categoria){
          throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);
      }
      return await this.produtosRepository.save(createProdutoDto);
  }
    return this.produtosRepository.save(createProdutoDto);
  }
//
  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.produtosRepository.update(id, updateProdutoDto);
  }

  async delete(id: number): Promise<DeleteResult> {

    let buscaProduto = await this.findById(id);

    if (!buscaProduto) {
        throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)
    }
    return await this.produtosRepository.delete(id);
  }
}
