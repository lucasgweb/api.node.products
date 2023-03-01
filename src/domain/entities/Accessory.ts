import { AccessoryColor } from './AccessoryColor';
import { Entity } from './Entity';

export class Accessory extends Entity {
  private accessory_colors: AccessoryColor[] = [];
  constructor(
    id: string,
    active: string,
    private name: string,
    private price: number,
    private typeoftax: string,
    private product_id: string,
    created_at: string,
    updated_at?: string,
  ) {
    super(id, active, created_at, updated_at);
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getPrice(): number {
    return this.price;
  }

  public setTypeOfTax(typeoftax: string): void {
    this.typeoftax = typeoftax;
  }

  public getTypeOfTax(): string {
    return this.typeoftax;
  }

  public setProductId(product_id: string): void {
    this.product_id = product_id;
  }

  public getProductId(): string {
    return this.product_id;
  }

  public getAccessoryColors(): AccessoryColor[] {
    return this.accessory_colors;
  }
}
