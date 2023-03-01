import { Column, PrimaryColumn, Entity, CreateDateColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryColumn()
  public id!: string;

  @Column()
  public active!: string;

  @Column()
  public is_public!: string;

  @Column()
  public name!: string;

  @Column()
  public processprice!: number;

  @Column()
  public full_description!: string;

  @Column()
  public short_description!: string;

  @CreateDateColumn()
  public created_at!: string;

  @CreateDateColumn()
  public updated_at?: string;
}
