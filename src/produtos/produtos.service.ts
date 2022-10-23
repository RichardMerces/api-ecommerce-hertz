import { Injectable, Inject } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriasService } from 'src/categorias/categorias.service';
import { Categoria } from 'src/categorias/entities/categoria.entity';
import { ILike, Repository, DeleteResult } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
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

        categoria: true,
        cliente: true

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
        cliente: true

      }
 
    });  

  }

  async create(createProdutoDto: CreateProdutoDto): Promise<CreateProdutoDto> {
    
    if (createProdutoDto.categoria){

      let categoria = await this.categoriasService.findById(createProdutoDto.categoria.idCategoria)

      if (!categoria){

          throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

      }
     
       return await this.produtosRepository.save(createProdutoDto);

    }

    return this.produtosRepository.save(createProdutoDto);
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {

    
    if(!id) {
      
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
      
    }
    
    if (updateProdutoDto.categoria) {
      
      let buscaCategoria = await this.categoriasService.findById(Number(updateProdutoDto.categoria))


      if (!buscaCategoria){

          throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)

      }

      return await this.produtosRepository.update(id, updateProdutoDto);

    }
 
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
