import { ListAllProducts } from '@application/useCases';
import { CreateProduct } from '@application/useCases';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { v4 } from 'uuid'

export class ProductsController {
  async listAll(request: Request, response: Response): Promise<Response> {
    const params = request.query;

    const listProductsUseCase = container.resolve(ListAllProducts);
    const products = await listProductsUseCase.listAll({ ...params });

    return response.status(200).json(products);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      full_description,
      short_description,
      active,
      is_public,
      processprice,
    } = request.body;

    const uuid = v4();

    const createUseCase = container.resolve(CreateProduct);
    
    const product = await createUseCase.create({
      uuid,
      name,
      full_description,
      processprice,
      short_description,
      active,
      is_public,
    });

    return response.json(product);
  }
}
