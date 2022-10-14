import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { clienteProviders } from './cliente.providers';
import { ClienteService } from './cliente.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...clienteProviders,
    ClienteService,
  ],
})
export class PhotoModule {}
