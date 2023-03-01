import { Product } from '@domain/entities/index';
import { ProductEntity } from '@infra/database/typeorm';

export class ProductMapper {
  static toDomain(entity: ProductEntity): Product {

    const product = new Product(
      entity.id,
      entity.active,
      entity.is_public,
      entity.name,
      entity.processprice,
      entity.short_description,
      entity.full_description,
      entity.created_at,
      entity.updated_at,
    );

    return product;
  }

  static toEntity(product: Product): ProductEntity {
    const entity = new ProductEntity();
    entity.id = product.getId();
    entity.name = product.getName();
    entity.active = product.getActive();
    entity.processprice = product.getProcessPrice();
    entity.short_description = product.getShortDescription();
    entity.full_description = product.getFullDescription();
    entity.created_at = product.getCreatedAt();
    entity.updated_at = product.getUpdatedAt();

    return entity;
  }
}
