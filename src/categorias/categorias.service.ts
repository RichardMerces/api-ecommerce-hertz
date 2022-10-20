import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { ProdutosService } from 'src/produtos/produtos.service';

@Injectable()
export class CategoriasService {

  constructor(
    @Inject('CATEGORIAS_REPOSITORY')
    private categoriasRepository: Repository<Categoria>,
    private produtosService: ProdutosService
  ) {}

  async findAll(): Promise<Categoria[]> {
    return await this.categoriasRepository.find({
      relations: {
        produto: true
    }
  });
  } // findAll - serve para listar todas as categorias que estão na tabela categoria

  async findById(idCategoria: number): Promise<Categoria> {

    let categoria = await this.categoriasRepository.findOne({

      where: {
        idCategoria
      },
      relations: {
        produto: true
      }

    });

    if(!categoria) {

      throw new HttpException('Categoria não encontrado!', HttpStatus.NOT_FOUND);

    }

    return categoria; 
  }
  
  async findByName(nome: string): Promise<Categoria[]> {

    return await this.categoriasRepository.find({

      where:{

        nome: ILike(`%${nome}%`)

      },
      relations: {
        produto: true
      }
    });
    
  }
  
  async create(createCategoriaDto: CreateCategoriaDto): Promise<CreateCategoriaDto> {
    return this.categoriasRepository.save(createCategoriaDto);
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriasRepository.update(id, updateCategoriaDto);
  }

  async delete(id: number): Promise<DeleteResult> {

    let buscaCategoria = await this.findById(id);

    if (!buscaCategoria) {
        throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)
    }
    return await this.categoriasRepository.delete(id);
  }
}
