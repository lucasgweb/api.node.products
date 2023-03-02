import {
  IListProducts,
  IResponseListAllProducts,
} from '../dto/ProductDTO';
import { AppError } from '@shared/error/AppError';
import { Product } from '../../domain/Product';
import { IProductRepository } from '../../domain/repositories/IProductRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class FindProductById {
  constructor(
    @inject('productRepository')
    private repository: IProductRepository
  ) {}

  async findById(id: string): Promise<Product> {

    const product = await this.repository.findById(id);

    if (product) {
      return product;
    } else {
      throw new AppError(`No product found for id: ${id}`, 400)
    }
  }
}
