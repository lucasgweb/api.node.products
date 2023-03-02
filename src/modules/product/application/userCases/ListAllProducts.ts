import {
  IListProducts,
  IResponseListAllProducts,
} from '../dto/ProductDTO';
import { IProductRepository } from '../../domain/repositories/IProductRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class ListAllProducts {
  constructor(
    @inject('productRepository')
    private repository: IProductRepository
  ) {}

  async listAll(data: IListProducts): Promise<IResponseListAllProducts> {
    const { offset } = data;
    let { limit } = data;

    const products = await this.repository.findAll('active', offset, limit);

    let total = await this.repository.countAll('active', 'public');

    if (!limit) {
      limit = total;
    }

    const currentPage = offset ? Math.floor(offset / limit) + 1 : 1;

    return {
      metaData: {
        total,
        limit,
        page: currentPage,
      },
      products,
    };
  }
}
