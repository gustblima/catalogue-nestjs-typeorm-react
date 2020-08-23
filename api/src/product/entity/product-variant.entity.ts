import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, OneToMany, JoinColumn, AfterUpdate, BeforeUpdate, ManyToMany, JoinTable } from 'typeorm';
import { ProductVariantPhoto } from './product-photo.entity'
import { Category } from './category.entity';
import { Product } from './product.entity';

@Entity()
export class ProductVariant {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @OneToMany(type => ProductVariantPhoto, photo => photo.variant, { eager: true })
  photos: ProductVariantPhoto[];

  @ManyToOne(type => Product, product => product.variants, { nullable: false })
  product: Product;

  @Column()
  productId: number;

  @ManyToOne(type => Category, category => category, { nullable: false })
  category: Category;

  @Column()
  categoryId: number;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date;
  }

}