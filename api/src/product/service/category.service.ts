import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entity';
import { CreateCategoryDTO } from '../dto/category.dto';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category) private categoriesRepository: Repository<Category>
  ) {}
  async getCategories(): Promise<Array<Category>> {
    return this.categoriesRepository.find();
  }

  async getOneCategory(categoryId: number): Promise<Category> {
    return this.categoriesRepository.findOne(categoryId);
  }

  async saveCategory(data: CreateCategoryDTO): Promise<Category> {
    return this.categoriesRepository.save(data);
  }

}
