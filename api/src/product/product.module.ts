import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './service/product.service'
import { ProductController } from './controller/product.controller'
import { ProductVariant, ProductPhoto, Category, Product } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductVariant, ProductPhoto, Category])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
