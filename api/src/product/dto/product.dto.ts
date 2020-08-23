export class CreateProductDTO {
  name: string;
  description: string;
  variants: CreateProductVariantDTO[];
}

export class CreateProductVariantDTO {
  name: string;
  photos: CreateProductPhotoDTO[];
  productId?: number;
  categoryId: number;
}

export class CreateProductPhotoDTO {
  path: string;
  order: number;
}

export interface Pagination<T> {
  data: Array<T>;
  total: number
}
