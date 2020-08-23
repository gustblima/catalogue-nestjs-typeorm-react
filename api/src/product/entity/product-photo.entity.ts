import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ProductVariant } from './product-variant.entity';


@Entity()
@Index(['sortOrder', 'variant'], { unique: true })
export class ProductVariantPhoto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  sortOrder: number;

  @ManyToOne(type => ProductVariant, variant => variant.id, { nullable: false })
  @JoinColumn()
  variant: ProductVariant;

  @Column()
  variantId: number;

}