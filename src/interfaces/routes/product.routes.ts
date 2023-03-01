import { Router } from 'express';
import { ProductsController } from '../controllers/ProductsController';

const productsController = new ProductsController();

const productRoutes = Router();

productRoutes.get('/listall', productsController.listAll);
productRoutes.post('/create', productsController.create);


export default productRoutes;