export class AccessoryColor {
  constructor(
    private id: string,
    private name: string,
    private accessory_id: string,
  ) {}

  public setId(id: string): void {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setAccessoryId(accessory_id: string): void {
    this.accessory_id = accessory_id;
  }

  public getAccessoryId(): string {
    return this.accessory_id;
  }
}
