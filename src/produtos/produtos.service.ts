import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriasService } from 'src/categorias/categorias.service';
import { ILike, Repository, DeleteResult } from 'typeorm';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtosRepository: Repository<Produto>,
    private categoriasService: CategoriasService,
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtosRepository.find({

      relations: {
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
        categoria: true,
        usuario: true
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
        categoria: true,
        usuario:true
      }
 
    });  

  }

  async create(produto: Produto): Promise<Produto> {
    
    if (produto.categoria){

      let categoria = await this.categoriasService.findById(produto.categoria.idCategoria)

      if (!categoria){
          throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
      }  
       return await this.produtosRepository.save(produto);
    }
    return this.produtosRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {
    
    let buscaPostagem: Produto = await this.findById(produto.idProduto);

    if(!buscaPostagem || !produto.idProduto) {
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
      
    }
    
    if (produto.categoria) {
      
      let buscaCategoria = await this.categoriasService.findById(produto.categoria.idCategoria)


      if (!buscaCategoria){

          throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)

      }
      return await this.produtosRepository.save(produto);
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
