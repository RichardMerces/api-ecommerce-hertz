import { DataSource } from 'typeorm';
import { Categorias } from './entities/categoria.entity';

export const CategoriasProviders = [
  {
    provide: 'CATEGORIAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Categorias),
    inject: ['DATA_SOURCE'],
  },
];
