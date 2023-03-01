import { Router } from 'express';
import { ProductsController } from '../controllers/ProductsController';

const productsController = new ProductsController();

export const productRoutes = Router();

productRoutes.get('/', productsController.listAll);
productRoutes.post('/', productsController.create);
productRoutes.get('/:id', productsController.findById);
productRoutes.put('/:id', productsController.update);
