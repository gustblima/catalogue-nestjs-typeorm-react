import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { IProduct } from '../types';
import ProductItem from './ProductItem';
import useProducts from '../context/products';
import { getAllProducts } from '../api/ProductApi';

function ProductList() {
  const {
    state: { products, loading, error, productsCount, page },
    dispatch,
  } = useProducts();

  useEffect(() => {
    async function loadProducts() {
      dispatch({ type: 'FETCH_PRODUCTS_BEGIN'});
      try {
        const payload = await getAllProducts({ offset: page * 10 });
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: payload.data});
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_ERROR', error });
      }
    }
    loadProducts();
  }, [dispatch, page])

  return (
    <div>
      {console.log(products)}
     {products.map(p => <ProductItem product={p} />)}
    </div>
  );
}

export default ProductList;
