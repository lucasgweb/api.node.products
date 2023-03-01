import { container } from 'tsyringe';
import { v4 as uuidv4 } from 'uuid';

import { Product } from '@domain/entities';

import { IProductRepository } from '@domain/repositories/IProductRepository';
import { ProductRepository } from '@infra/database/typeorm/repositories/ProductRepository';

container.register<string>('uuid', {
  useValue: uuidv4(),
});

container.registerSingleton<IProductRepository>(
  'productRepository',
  ProductRepository,
);


container.register('product', { useClass: Product });


