import { Controller, Get, Post, Body, Put, Param, Query, ParseIntPipe } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { Pagination, CreateProductDTO, CreateProductVariantDTO } from '../dto/product.dto';
import { Product, ProductVariant } from '../entity';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(@Query() { search, offset, limit }: { search?: string, offset?: number, limit?: number }): Promise<Pagination<Product>> {
    return this.productService.getProducts(search, offset, limit);
  }

  @Get('/:productId')
  async getOne(@Param('productId', ParseIntPipe) productId: number): Promise<Product> {
    return this.productService.getOneProduct(productId);
  }

  @Post()
  async createProduct(@Body() data: CreateProductDTO): Promise<Product> {
    return this.productService.saveProduct(data);
  }

  @Post(':productId/variants')
  async createVariant(@Param('productId', ParseIntPipe) productId: number, @Body() data: CreateProductVariantDTO): Promise<ProductVariant> {
    return this.productService.saveVariant({...data, productId});
  }

}
