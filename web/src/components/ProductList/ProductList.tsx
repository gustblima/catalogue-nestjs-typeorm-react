import React, { useEffect } from 'react';
import { ProductItem } from '..';
import useProducts from '../../context/products';
import { getAllProducts } from '../../api/ProductApi';
import "./ProductList.scss";

export function ProductList() {
  const {
    state: { products, search, limit, offset, loading },
    dispatch,
  } = useProducts();
  useEffect(() => {
    async function loadProducts() {
      dispatch({ type: 'FETCH_PRODUCTS_BEGIN'});
      try {
        const payload = await getAllProducts({ offset, limit, search });
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: payload.data});
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_ERROR', error });
      }
    }
    loadProducts();
  }, [dispatch, offset, limit, search])

  return (
    <div className='ProductList'>
      {!loading &&
        <>
          <div className='ProductList-Header'>
            <h6>{products.length} {products.length !== 1 ? 'produtos encontrados' : 'produto encontrado'}</h6>
          </div>
          { products.map(p => <ProductItem key={p.id} product={p} />) }
          { products.length === 0 && <h6>Nenhum produto encontrado :(</h6> }
        </>
      }
     
    </div>
  );
}
