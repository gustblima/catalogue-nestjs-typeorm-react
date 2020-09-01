import {
  MinLength,
} from 'class-validator';

export class CreateCategoryDTO {

  @MinLength(3)
  name: string;

}
