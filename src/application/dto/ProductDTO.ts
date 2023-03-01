import { Product } from '@domain/entities/index';

export interface ICreateProductDTO {
  uuid: string
  active: string;
  name: string;
  processprice: number;
  full_description: string;
  short_description: string;
  is_public: string;
}

export interface IListProducts {
  offset?: number;
  limit?: number;
}

export interface IResponseListAllProducts {
  metaData: {
    total: number;
    limit: number;
    page: number;
  };

  products: Array<Product>;
}

export interface IUpdateProductDTO {
  id: string;
  name?: string;
  full_description?: string;
  short_description?: string;
  active?: string;
  processprice?: number;
  is_public?: string;
}
