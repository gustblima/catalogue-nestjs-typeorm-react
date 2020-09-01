import {
  IsInt,
  Length,
  Min,
  MinLength,

} from 'class-validator';

export class CreateProductDTO {
  @MinLength(4)
  name: string;

  @MinLength(4)
  description: string;

  variants: CreateProductVariantDTO[];
}

export class CreateProductVariantDTO {

  @MinLength(4)
  name: string;

  photos: CreateProductPhotoDTO[];

  @IsInt()
  @Min(1)
  productId?: number;

  @IsInt()
  @Min(1)
  categoryId: number;
}

export class CreateProductPhotoDTO {
  @MinLength(4)
  path: string;

  @IsInt()
  @Min(0)
  order: number;
}

export interface Pagination<T> {
  data: Array<T>;
  total: number
}
