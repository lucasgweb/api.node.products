import { ICreateProductDTO } from "@application/dto/ProductDTO";
import { AppError } from "@application/Error/AppError";
import { ProductExporterInterface } from "@application/exporters/ProductExporterInterface";
import { Product, Visibility, Status } from "@domain/entities/Product";
import { IProductRepository } from "@domain/repositories/IProductRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateProduct {
   constructor(
    @inject('productRepository')
     private repository: IProductRepository,
  ) {}

  async create({ uuid, name, full_description, short_description, processprice, active, is_public }: ICreateProductDTO): Promise<ProductExporterInterface> {

    const product = new Product(uuid, active, is_public, name, processprice, short_description, full_description, new Date().toISOString());

    await this.repository.save(product);

    return {
      id: product.getId(),
      name: product.getName(),
      active: product.getActive(),
      full_description: product.getFullDescription(),
      short_description: product.getShortDescription(),
      is_public: product.getIsPublic(),
      processprice: product.getProcessPrice(),
    };
  }
}
