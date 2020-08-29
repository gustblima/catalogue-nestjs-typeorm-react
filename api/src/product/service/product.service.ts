import { Injectable } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDTO, CreateProductVariantDTO, Pagination } from '../dto/product.dto';
import { ProductVariant, Product } from '../entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
    @InjectRepository(ProductVariant) private variantsRepository: Repository<ProductVariant>
  ) {}
  async getProducts(keyword = '', offset = 0, limit = 10): Promise<Pagination<Product>> {
    const [result, total] = await this.productsRepository.createQueryBuilder('product')
      .innerJoinAndSelect('product.variants', 'variant')
      .leftJoinAndSelect('variant.deals', 'deal', 'deal.startsAt >= :now', { now: `'${new Date().toISOString()}'` })
      .leftJoinAndSelect('product.photos', 'photo')
      .leftJoinAndSelect('variant.category', 'category')
      .where('product.name LIKE :name AND product.isPublished = :isPublished', {
        name: `%${keyword}%`,
        isPublished: true
      })
      .take(limit)
      .skip(offset)
      .getManyAndCount();

    return {
      data: result,
      total
    }
  }

  async getOneProduct(productId: number): Promise<Product> {
    return this.productsRepository.findOne(productId);
  }

  async saveVariant(data: CreateProductVariantDTO) {
    return this.variantsRepository.save(data);
  }

  async saveProduct(data: CreateProductDTO) {
    return this.productsRepository.save(data);
  }

}
