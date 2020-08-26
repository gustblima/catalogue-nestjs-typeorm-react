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
  price: number
  category: ICategory
  deals: IDeal[]
  createdAt: string
  updatedAt: string
}

export interface IProductPhoto {
  path: string
  sortOrder: number
}

export interface IDeal {
  fixedAmount: number
  percentageAmount: number
}

export interface IPagination<T> {
  data: T[],
  total: number
}