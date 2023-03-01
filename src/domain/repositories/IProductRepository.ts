import { Product } from '../entities';

export interface IProductRepository {
  save(product: Product): Promise<void>;
  findAll(status: string, offset?: number, limit?: number): Promise<Product[]>;
  findById(product: Product): Promise<boolean>;
  updateById(product: Product): Promise<void>;
  inactiveById(id: string): Promise<void>;
  countAll(status: string, visibility: string): Promise<number>;
  findAllPublic(
    visibility: string,
    offset?: number,
    limit?: number,
  ): Promise<Product[]>;
}
