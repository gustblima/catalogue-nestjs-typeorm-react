import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './service/product.service'
import { ProductController } from './controller/product.controller'
import { ProductVariant, ProductPhoto, Category, Product } from './entity';
import { CategoryService } from './service';
import { CategoryController } from './controller/category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductVariant, ProductPhoto, Category])],
  providers: [ProductService, CategoryService],
  controllers: [ProductController, CategoryController]
})
export class ProductModule {}
