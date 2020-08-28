import Api from './Api'
import { IProduct, IPagination } from '../types';
type getAllQueryParams = {
  search?: string | null,
  offset?: number,
  limit?: number
}

export const getAllProducts = (params: getAllQueryParams = {}) => {
  return Api.get<IPagination<IProduct>>('/products', { params });
}
