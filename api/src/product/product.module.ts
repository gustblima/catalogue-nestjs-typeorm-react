import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './service/product.service'
import { ProductController } from './controller/product.controller'
import { ProductVariant, ProductVariantPhoto, Category, Product } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductVariant, ProductVariantPhoto, Category])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
