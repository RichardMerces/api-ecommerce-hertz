import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { Cliente } from './entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])], 
  providers: [ClienteService],
  controllers: [ClienteController],
  exports: [TypeOrmModule]
})

export class ClienteModule {}
