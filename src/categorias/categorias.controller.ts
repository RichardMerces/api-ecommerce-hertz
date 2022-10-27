import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, ParseIntPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { CategoriasService } from './categorias.service';
import { Categoria } from './entities/categoria.entity';

@UseGuards(JwtAuthGuard)
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}
  
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Categoria[]>{
    return this.categoriasService.findAll()
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.categoriasService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByName(@Param('nome') nome: string): Promise<Categoria[]> {
    return this.categoriasService.findByName(nome);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriasService.create(categoria);
  }
   
  @Patch('/atualizar')
  @HttpCode(HttpStatus.OK)
  update(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriasService.update(categoria);
  }
  
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriasService.delete(id);
  } 
}
