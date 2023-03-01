import { GlassColor } from "./GlassColor";

export class Thickness {
  public glass_colors: GlassColor[] = [];
  constructor(
    private id: string,
    private thickness: number,
    private dimensions_id: string,
  ) {}

  public setId(id: string): void {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }

  public setThickness(thickness: number): void {
    this.thickness = thickness;
  }

  public getThickness(): number {
    return this.thickness;
  }

  public setDimensionsId(dimensions_id: string): void {
    this.dimensions_id = dimensions_id;
  }

  public getDimensionsId(): string {
    return this.dimensions_id;
  }
}
