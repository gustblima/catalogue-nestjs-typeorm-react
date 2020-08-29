import React from 'react';
import {
  ProductsListState,
  ProductsListAction,
  initialState,
  productsReducer,
} from '../reducers/productList';

type ProductListContextProps = {
  state: ProductsListState;
  dispatch: React.Dispatch<ProductsListAction>;
};

const ProductsContext = React.createContext<ProductListContextProps>({
  state: initialState,
  dispatch: () => initialState,
});

export function ProductsProvider(props: React.PropsWithChildren<unknown>) {
  const [state, dispatch] = React.useReducer(productsReducer, initialState);
  return <ProductsContext.Provider value={{ state, dispatch }} {...props} />;
}

export default function useProducts() {
  const context = React.useContext(ProductsContext);
  if (!context) {
    throw Error('No provider');
  }
  return context;
}
