export enum Status {
  Active = 'active',
  Inactive = 'inactive',
}

export class Entity {
  constructor(
    protected id: string,
    protected active: string,
    protected created_at: string,
    protected updated_at?: string,
  ) {
    if (active == 'inactive') {
       this.setStatusInactive();
    } else {
      this.setStatusActive();
    }
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getId(): string {
    return this.id;
  }

  public getActive(): string {
    return this.active;
  }

  public setCreatedAt(created_at: string):void {
    this.created_at = created_at;
  }

  public getCreatedAt(): string {
    return this.created_at;
  }

  public getUpdatedAt(): string | undefined {
    return this.updated_at;
  }

  public setStatusActive(): void {
    this.active = Status.Active;
  }

  public setStatusInactive(): void {
    this.active = Status.Inactive;
  }
}
