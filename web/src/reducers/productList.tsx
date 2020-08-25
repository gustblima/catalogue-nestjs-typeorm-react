import { IProduct, IPagination } from "../types";

export type ProductsListAction =
  | { type: 'FETCH_PRODUCTS_BEGIN' }
  | {
      type: 'FETCH_PRODUCTS_SUCCESS';
      payload: IPagination<IProduct>
    }
  | { type: 'FETCH_PRODUCTS_ERROR'; error: string }
  | { type: 'SET_PAGE'; page: number };

export interface ProductsListState {
  products: Array<IProduct>;
  loading: boolean;
  error: string | null;
  productsCount: number;
  page: number;
}

export const initialState: ProductsListState = {
  products: [],
  loading: false,
  error: null,
  productsCount: 0,
  page: 0,
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
    case 'SET_PAGE':
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
}
