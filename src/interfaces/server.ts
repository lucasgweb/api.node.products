import 'reflect-metadata';
import '@infra/container/index';
import 'express-async-errors';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
import express, { NextFunction, Request, Response } from 'express';
import productRoutes from './routes/product.routes';
import { ormCreateConnection } from '@infra/database';
import { AppError } from '@application/Error/AppError';
import { handleError } from './middleware/error';

const app = express();

ormCreateConnection('default');

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRoutes);

app.use(handleError);

app.listen(process.env.PORT, () => {
  console.log('Servidor iniciado com sucesso!');
  console.log(`http://localhost:${process.env.PORT}`);
});
