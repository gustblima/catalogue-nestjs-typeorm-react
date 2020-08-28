import React, { useEffect } from 'react';
import { Spinner, Row, Col } from 'reactstrap';
import { ProductItem, PaginationOffset, PaginationLimit } from '../index';
import useProducts from '../../context/products';
import { getAllProducts } from '../../api/ProductApi';
import "./ProductList.scss";

export function ProductList() {
  const {
    state: { products, search, limit, page, totalPages, loading },
    dispatch,
  } = useProducts();

  const changePage = (selectedPage: number) => {
    if(selectedPage >= 0 && selectedPage <= (totalPages - 1) && selectedPage !== page) {
      dispatch({ type: 'SET_PAGE', page: selectedPage })
    }
  }

  const changeLimit = (limit: number) => {
    dispatch({ type: 'SET_LIMIT', limit })
  }

  useEffect(() => {
    const loadProducts = async () => {
      dispatch({ type: 'FETCH_PRODUCTS_BEGIN'});
      try {
        const payload = await getAllProducts({ offset: page * limit, limit, search })
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: payload.data });
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_ERROR', error });
      }
    }
    if(!loading) {
      loadProducts();
    }
 
  }, [dispatch, page, limit, search])

  return (
    <div className='ProductList'>
      {!loading ?
      <>
        <Row>
          <div className='w-100'>
            <div className='ProductList-Header'>
              <h6>{products.length} {products.length !== 1 ? 'produtos encontrados' : 'produto encontrado'}</h6>
            </div>
            { products.map(p => <ProductItem key={p.id} product={p} />) }
            { products.length === 0 && <h6>Nenhum produto encontrado :(</h6> }
          </div>
        </Row>
        <Row className='Footer mt-5'>
          <Col sm={4}>
            <PaginationLimit onSelect={changeLimit} value={limit} />
          </Col>
          <Col sm={8}>
            <PaginationOffset onClick={changePage} totalPages={totalPages} currentPage={page} />
          </Col>
        </Row>
        </>
       : <Spinner className="ProductList-Spinner" color="primary" /> }
    </div>
  );
}
