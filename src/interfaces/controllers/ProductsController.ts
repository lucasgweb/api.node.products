import { ListAllProducts } from '@application/useCases';
import { CreateProduct } from '@application/useCases';
import { FindProductById } from '@application/useCases/product/FindProductById';
import { UpdateProduct } from '@application/useCases/product/UpdateProduct';
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

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findByIdUseCase = container.resolve(FindProductById);
    const product = await findByIdUseCase.findById(id);

    return response.status(200).json(product);
  }


  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const data = request.body;

    const updateUseCase = container.resolve(UpdateProduct);
    const product = await updateUseCase.update(id, data);

    return response.status(200).json(product)
  }
}
