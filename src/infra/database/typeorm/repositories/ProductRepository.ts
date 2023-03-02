import { Product } from '@modules/product';
import { IProductRepository } from '@modules/product';

import { ProductMapper } from '@infra/mappers/ProductMapper';
import { getRepository, Repository } from 'typeorm';
import { ProductEntity } from '../entities/ProductEntity';

export class ProductRepository implements IProductRepository {
  private repository: Repository<ProductEntity>;

  constructor() {
    this.repository = getRepository(ProductEntity);
  }

  async save(product: Product): Promise<void> {
   const entity = ProductMapper.toEntity(product);

    await this.repository.save(entity);
  }

  async findById(id: string): Promise<Product | undefined> {
    const product = await this.repository.findOne(id);

    if (product) {
       return ProductMapper.toDomain(product);
    }
      return product;

  }
  update(id: string, product: Product): Promise<void> {
    throw new Error('Method not implemented.');
  }
  inactiveById(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findAllPublic(
    visibility: string,
    offset?: number,
    limit?: number,
  ): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  async findAll(
    status: string,
    offset?: number,
    limit?: number,
  ): Promise<Product[]> {
    const entities = await this.repository
      .createQueryBuilder('product')
      .where('product.active = :active', { active: status })
      .skip(offset)
      .take(limit)
      .orderBy('product.name')
      .getMany();

    const products = entities.map(entity => ProductMapper.toDomain(entity));
    return products;
  }

  async countAll(status: string, visibility: string): Promise<number> {
    const count = await this.repository
      .createQueryBuilder('product')
      .where('product.active = :active', { active: status })
      .where('product.is_public = :is_public', { is_public: visibility })
      .getCount();

    return count;
  }
}
