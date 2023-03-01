import 'reflect-metadata';
import '@infra/container/index';
import 'express-async-errors';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import { ormCreateConnection } from '@infra/database';
import { handleError } from './middleware/error';
import { router } from './routes/index.router';

const app = express();

ormCreateConnection('default');

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(handleError);

app.listen(process.env.PORT, () => {
  console.log('Servidor iniciado com sucesso!');
  console.log(`http://localhost:${process.env.PORT}`);
});
