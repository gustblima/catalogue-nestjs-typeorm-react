import React, { useEffect } from 'react';
import { ProductItem } from './';
import useProducts from '../context/products';
import { getAllProducts } from '../api/ProductApi';
import { useLocation } from "@reach/router";

function ProductList() {
  const {
    state: { products, search, loading, error, productsCount, limit, offset },
    dispatch,
  } = useProducts();
  const location = useLocation();

  useEffect(() => {
    async function loadProducts() {
      dispatch({ type: 'FETCH_PRODUCTS_BEGIN'});
      try {
        const payload = await getAllProducts({ offset, search });
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: payload.data});
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_ERROR', error });
      }
    }
    loadProducts();
  }, [dispatch, offset, limit, search])

  return (
    <div>
      {console.log(products)}
     {products.map(p => <ProductItem key={p.id} product={p} />)}
    </div>
  );
}

export default ProductList;
