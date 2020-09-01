import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CategoryService } from '../service';
import { Category } from '../entity';
import { CreateCategoryDTO } from '../dto/category.dto';

@Controller('/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories(): Promise<Array<Category>> {
    return this.categoryService.getCategories();
  }

  @Get('/:categoryId')
  async getOne(@Param('categoryId', ParseIntPipe) categoryId: number): Promise<Category> {
    return this.categoryService.getOneCategory(categoryId);
  }

  @Post()
  async createProduct(@Body() data: CreateCategoryDTO): Promise<Category> {
    return this.categoryService.saveCategory(data);
  }

}
