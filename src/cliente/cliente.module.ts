import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ClienteController } from './cliente.controller';
import { clienteProviders } from './cliente.providers';
import { ClienteService } from './cliente.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ClienteController],
  providers: [
    ...clienteProviders,
    ClienteService,
  ],
})
export class ClienteModule {}
