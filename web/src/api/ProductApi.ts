import Api from './Api'
import { IProduct, IPagination } from '../types';
type getAllQueryParams = {
  search?: string,
  offset?: number,
  limit?: number
}

export const getAllProducts = async (params: getAllQueryParams = {}) => {
  return Api.get<IPagination<IProduct>>('/products', { params });
}
