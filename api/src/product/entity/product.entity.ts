import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, BeforeUpdate, Index, ManyToMany, JoinTable } from 'typeorm';
import { ProductVariant } from './product-variant.entity';
import { ProductPhoto } from './product-photo.entity';

@Index(['name'], { unique: true })
@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => ProductPhoto, photo => photo.product, { eager: true })
  photos: ProductPhoto[];

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