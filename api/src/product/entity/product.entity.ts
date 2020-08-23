import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, BeforeUpdate, Index, ManyToMany, JoinTable } from 'typeorm';
import { ProductVariant } from './product-variant.entity';
import { Deal } from './deal.entity';

@Index(['name'], { unique: true })
@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(type => Deal)
  @JoinTable({ name: 'product_deals' })
  deals: Deal[]

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: true })
  isPublished: boolean

  @OneToMany(type => ProductVariant, variant => variant.product, { eager: true, cascade: true })
  @JoinColumn()
  variants: ProductVariant[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date;
  }

}