import { Accessory } from './Accessory';
import { Entity } from './Entity';

export { Status } from "./Entity";

export enum Visibility {
  Public = 'public',
  Private = 'private',
}

export class Product extends Entity {

  private accessories: Accessory[] = [];

  constructor(
    id: string,
    active: string,
    private is_public: string,
    private name: string,
    private processprice: number,
    private short_description: string,
    private full_description: string,
    created_at: string,
    updated_at?: string,
  ) {
    super(id, active, created_at, updated_at,);

    if (is_public == 'private') {
      this.setPrivate();
    } else {
      this.setPublic();
    }
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setProcessPrice(price: number): void {
    this.processprice = price;
  }

  public getProcessPrice(): number {
    return this.processprice;
  }

  public setShortDescription(shortDescription: string): void {
    this.short_description = shortDescription;
  }

  public getShortDescription(): string {
    return this.short_description;
  }

  public setFullDescription(fullDescription: string): void {
    this.full_description = fullDescription;
  }

  public getFullDescription(): string {
    return this.full_description;
  }

  public getAccessories(): Accessory[] {
    return this.accessories;
  }

  public getIsPublic(): string {
    return this.is_public;
  }

  // Accessory methods
  public addAccessory(accessory: Accessory): void {
    this.accessories.push(accessory);
  }

  public removeAccessory(accessory: Accessory): void {
    const index = this.accessories.indexOf(accessory);
    if (index > -1) {
      this.accessories.splice(index, 1);
    }
  }

  // Visibility methods

  public setPublic(): void {
    this.is_public = Visibility.Public;
  }

  public setPrivate(): void {
    this.is_public = Visibility.Private;
  }
}
