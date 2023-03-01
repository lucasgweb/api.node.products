import { Accessory } from './Accessory';
import { Entity } from './Entity';

enum Visibility {
  Public = 'public',
  Private = 'private',
}

export class Gallery extends Entity {

  private accessories: Accessory[] = [];

  constructor(
    id: string,
    active: string,
    created_at: string,
    private image: string,
    updated_at?: string,
    private product_id?: string,
    private glass_color_id?: string,
    private type_product_id?: string,
    private accessory_id?: string,

  ) {
    super(id, active, created_at, updated_at);
  }

  public setImage(image: string): void {
    this.image = image;
  }

  public getImage(): string {
    return this.image;
  }

  public setProductId(product_id: string): void {
    this.product_id = product_id;
  }

  public getProductId(): string | undefined  {
    return this.product_id;
  }

  public setGlassColorId(glass_color_id: string): void {
    this.glass_color_id = glass_color_id;
  }

  public getGlassColorId(): string | undefined {
    return this.glass_color_id;
  }

  public setTypeProductId(type_product_id: string): void {
    this.type_product_id = type_product_id;
  }

  public getTypeProductId(): string | undefined{
    return this.type_product_id;
  }

   public setAccessoryId(accessory_id: string): void {
    this.accessory_id = accessory_id;
  }

  public getAccessoryId(): string | undefined{
    return this.accessory_id;
  }
}
