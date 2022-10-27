import { Body, Controller, Get, HttpCode, HttpStatus, Patch, Post, UseGuards} from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller("/usuarios")
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) { }

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/cadastrar')
    async create(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.create(usuario);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('/atualizar')
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario);
    }
}
