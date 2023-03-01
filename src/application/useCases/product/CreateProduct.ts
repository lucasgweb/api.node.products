import { ICreateProductDTO } from "@application/dto/ProductDTO";
import { ProductValidator } from "@application/validators/ProductValidator";
import { Product, Visibility, Status } from "@domain/entities/Product";
import { IProductRepository } from "@domain/repositories/IProductRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateProduct {
  constructor(
    @inject('productRepository')
    private repository: IProductRepository,
  ) { }

  async create(data: ICreateProductDTO): Promise<Product> {

    ProductValidator.validateCreateProduct(data);

    const { uuid, name, full_description, short_description, processprice, active, is_public } = data;

    const product = new Product(uuid, active, is_public, name, processprice, short_description, full_description, new Date().toISOString());

    await this.repository.save(product);

    return product;
  }
}
