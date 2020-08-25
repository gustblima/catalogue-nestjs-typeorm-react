export interface IProduct {
  name: string
  description: string
  variants: IProductVariant[]
  id: number
  isPublished: boolean
  photos: IProductPhoto[]
  createdAt: string
  updatedAt: string
}

export interface ICategory {
  id: number
  name: string
}

export interface IProductVariant {
  name: string,
  photos: IProductPhoto[]
  categoryId: number
  category: ICategory
  createdAt: string
  updatedAt: string
}

export interface IProductPhoto {
  path: string
  sortOrder: number
}

export interface IPagination<T> {
  data: T[],
  total: number
}