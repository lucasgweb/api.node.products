import { Product } from '../entities';

export interface IProductRepository {
  save(product: Product): Promise<void>;
  findAll(status: string, offset?: number, limit?: number): Promise<Product[]>;
  findById(id: string): Promise<Product | undefined>;
  update(id: string, product: Product): Promise<void>;
  inactiveById(id: string): Promise<void>;
  countAll(status: string, visibility: string): Promise<number>;
  findAllPublic(
    visibility: string,
    offset?: number,
    limit?: number,
  ): Promise<Product[]>;
}
