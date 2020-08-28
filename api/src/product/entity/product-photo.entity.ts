import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Product } from './product.entity';


@Entity()
@Index(['sortOrder', 'product'], { unique: true })
export class ProductPhoto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  sortOrder: number;

  @ManyToOne(type => Product, product => product.photos, { nullable: false })
  @JoinColumn()
  product: Product;

  @Column()
  productId: number;

}