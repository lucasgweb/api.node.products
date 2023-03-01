import { Status } from '@domain/entities';
import { ICreateProductDTO } from '../dto/ProductDTO';
import { AppError } from '../error/AppError';

export class ProductValidator {
  public static validateCreateProduct(data: ICreateProductDTO) {
    const { uuid, name, full_description, short_description, processprice, active, is_public } = data;

    if (!uuid || !name || !full_description || !short_description || !processprice || !active || !is_public) {
      throw new AppError('Missing required data for product creation', 400);
    }

    if (typeof uuid !== 'string' || typeof name !== 'string' || typeof full_description !== 'string' || typeof short_description !== 'string' || typeof processprice !== 'number' || typeof active !== 'string' || typeof is_public !== 'string') {
      throw new AppError('Invalid data type for product creation', 400);
    }

    const uuidRegex = /^[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}$/i;
    if (!uuidRegex.test(uuid)) {
      throw new AppError('Invalid UUID format', 400);
    }

    if (name.length < 2 || name.length > 50) {
      throw new AppError('Name must have between 2 and 50 characters', 400);
    }

    if (this.validateActive(active) == false) {
      throw new AppError(`Status ${active} does not exist, try 'active' or 'inactive'`, 400);
    }

    return true;
  }

  static validateActive(active: string): boolean {
    return Object.values(Status).includes(active as Status);
  }
}