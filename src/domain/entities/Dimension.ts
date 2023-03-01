import { Entity } from './Entity';
import { Thickness } from './Thickness';

export class Dimension extends Entity {
  private thicknesses: Thickness[] = [];
  constructor(
    id: string,
    active: string,
    private width: number,
    private height: number,
    private product_id: string,
    private depth: number,
    created_at: string,
    updated_at?: string,
  ) {
    super(id, active, created_at, updated_at);
  }

  public setWidth(width: number): void {
    this.width = width;
  }

  public getWidth(): number {
    return this.width;
  }

  public setHeight(height: number): void {
    this.height = height;
  }

  public getHeight(): number {
    return this.height;
  }

  public setDepth(depth: number): void {
    this.height = depth;
  }

  public getDepth(): number {
    return this.depth;
  }

  public getThicknesses(): Thickness[] {
    return this.thicknesses;
  }

  public setProductId(product_id: string): void {
    this.product_id = product_id;
  }

  public getProductId(): string {
    return this.product_id;
  }
}
