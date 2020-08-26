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
  | { type: 'SET_OFFSET'; offset: number };

export interface ProductsListState {
  products: Array<IProduct>;
  loading: boolean;
  error: string | null;
  productsCount: number;
  offset: number;
  limit: number;
  search: string | null;
}

export const initialState: ProductsListState = {
  products: [],
  loading: false,
  error: null,
  productsCount: 0,
  offset: 0,
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
      console.log(action)
      return {
        ...state,
        loading: false,
        products: action.payload.data,
        productsCount: action.payload.total,
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
        products: [],
      };
    case 'SET_OFFSET':
      return {
        ...state,
        offset: action.offset,
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
