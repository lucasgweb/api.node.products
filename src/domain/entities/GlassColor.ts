import { Entity } from './Entity';

export class GlassColor extends Entity {
  constructor(
    id: string,
    active: string,
    private hexColorCode: string,
    private description: string,
    private product_id: string,
    created_at: string,
    updated_at?: string,
  ) {
    super(id, active, created_at, updated_at);
  }

  public setHexColorCode(hexColorCode: string): void {
    this.hexColorCode = hexColorCode;
  }

  public getHexColorCode(): string {
    return this.hexColorCode;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public getDescription(): string {
    return this.description;
  }

  public setProductId(product_id: string): void {
    this.product_id = product_id;
  }

  public getProductId(): string {
    return this.product_id;
  }
}
