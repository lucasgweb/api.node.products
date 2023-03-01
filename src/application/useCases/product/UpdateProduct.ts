import { inject, injectable } from 'tsyringe';

import { Product } from '@modules/product/domain/Product';
import { IUpdateProductDTO } from '@modules/product/dto/ProductDTO';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { AppError } from '@shared/error/AppError';
import { formatDate } from '@shared/infra/utils';

@injectable()
export class UpdateProductUseCase {
  constructor(
    @inject('productRepository')
    private repository: IProductRepository,
    @inject('product')
    private product: Product,
  ) {}

  async updateById(data: IUpdateProductDTO): Promise<Product> {
    const {
      id,
      name,
      full_description,
      short_description,
      active,
      is_public,
      processprice,
    } = data;
    this.product.id = id;
    await this.checkIfExists();

    Object.assign(this.product, {
      id,
      updated_at: formatDate(new Date().toISOString()),
    });
    if (processprice) {
      Object.assign(this.product, {
        processprice,
      });
    }
    if (name) {
      Object.assign(this.product, {
        name,
      });
    }
    if (full_description) {
      Object.assign(this.product, {
        full_description,
      });
    }
    if (short_description) {
      Object.assign(this.product, {
        short_description,
      });
    }
    if (active) {
      Object.assign(this.product, {
        active,
      });
    }
    if (is_public) {
      Object.assign(this.product, {
        is_public,
      });
    }
    await this.updateProductById();
    return this.product;
  }

  private async checkIfExists(): Promise<void> {
    if (!(await this.repository.findById(this.product))) {
      throw new AppError(`No product was found to id ${this.product.id}`, 400);
    }
  }

  private async updateProductById(): Promise<void> {
    await this.repository.updateById(this.product);
  }

  async inactive(id: string): Promise<void> {
    Object.assign(this.product, { id });
    await this.checkIfExists();
    await this.inactiveById();
  }

  private async inactiveById(): Promise<void> {
    await this.repository.inactiveById(this.product.id);
  }
}
