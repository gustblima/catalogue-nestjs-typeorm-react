import { IProduct, IPagination } from "../types";

export type ProductsListAction =
  | { type: 'FETCH_PRODUCTS_BEGIN' }
  | {
      type: 'FETCH_PRODUCTS_SUCCESS';
      payload: IPagination<IProduct>
    }
  | { type: 'FETCH_PRODUCTS_ERROR'; error: string }
  | { type: 'SET_SEARCH'; search: string }
  | { type: 'SET_LIMIT'; limit: number }
  | { type: 'SET_PAGE'; page: number };

export interface ProductsListState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
  productsCount: number;
  page: number;
  totalPages: number;
  limit: number;
  search: string | null;
}

export const initialState: ProductsListState = {
  products: [],
  loading: false,
  error: null,
  productsCount: 0,
  page: 0,
  totalPages: 0,
  limit: 0,
  search: null
};

export function productsReducer(
  state: ProductsListState,
  action: ProductsListAction,
): ProductsListState {

  switch (action.type) {
    case 'FETCH_PRODUCTS_BEGIN':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload.data,
        productsCount: action.payload.total,
        totalPages: 10 || Math.ceil(action.payload.total / state.limit)
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
        products: [],
      };
    case 'SET_PAGE':
      return {
        ...state,
        page: action.page,
      };
    case 'SET_LIMIT':
      return {
        ...state,
        limit: action.limit
      }
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.search
      }
    
    default:
      return state;
  }
}
