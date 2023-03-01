import { IUpdateProductDTO } from '@application/dto/ProductDTO';
import { AppError } from '@application/error/AppError';
import { Product } from '@domain/entities';
import { IProductRepository } from '@domain/repositories/IProductRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UpdateProduct {
  constructor(
    @inject('productRepository')
    private repository: IProductRepository,
  ) {}

  async update(id: string,data: IUpdateProductDTO): Promise<Product> {
    const {

      name,
      full_description,
      short_description,
      active,
      is_public,
      processprice,
    } = data;

    const product = await this.repository.findById(id);

     if (!product) {
      throw new AppError(`No product found for id: ${id}`, 400)
     }

    product.setName(name ?? product.getName());
    product.setFullDescription(full_description ?? product.getFullDescription());
    product.setShortDescription(short_description ?? product.getShortDescription());
    product.setProcessPrice(processprice ?? product.getProcessPrice());

    if (active) {
       if (active === 'inactive') {
      product.setStatusInactive();
    } else if (active === 'active') {
      product.setStatusActive();
    } else {
      throw new AppError(`Status ${active} does not exist, try 'active' or 'inactive'`, 400);
    }
    }

    if (is_public) {
       if (is_public === 'private') {
      product.setPrivate();
    } else if (is_public === 'public') {
      product.setPublic();
    } else {
      throw new AppError(`Visibility ${active} does not exist, try 'public' or 'private'`, 400);
    }
    }

    await this.repository.save(product);

    return product;

  }
}
