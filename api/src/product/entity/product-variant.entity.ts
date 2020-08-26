import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate, ManyToMany, JoinTable } from 'typeorm';
import { Category } from './category.entity';
import { Product } from './product.entity';
import { Deal } from './deal.entity';

@Entity()
export class ProductVariant {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(type => Deal)
  @JoinTable({ name: 'product_variant_deals' })
  deals: Deal[]

  @ManyToOne(type => Product, product => product.variants, { nullable: false })
  product: Product;

  @Column()
  productId: number;

  @ManyToOne(type => Category, category => category, { nullable: false, eager: true })
  category: Category;

  @Column()
  categoryId: number;

  @Column()
  price: number

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date;
  }

}