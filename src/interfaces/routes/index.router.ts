import { Router } from 'express';

import { productRoutes } from '@interfaces/routes/product.routes';

const router = Router();

router.get('/status', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

router.use('/products', productRoutes);

export { router };