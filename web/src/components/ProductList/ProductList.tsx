import React, { useEffect } from 'react';
import { Spinner, Row, Col } from 'reactstrap';
import { ProductItem, PaginationOffset, PaginationLimit } from '../index';
import useProducts from '../../context/products';
import { getAllProducts } from '../../api/ProductApi';
import queryString from 'query-string';
import './ProductList.scss';
import { navigate, useLocation } from '@reach/router';

export function ProductList() {
  const {
    state: {
      products,
      productsCount,
      search,
      limit,
      page,
      totalPages,
      loading,
    },
    dispatch,
  } = useProducts();

  const location = useLocation();

  const changePage = (selectedPage: number) => {
    if (
      selectedPage > 0 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      dispatch({ type: 'SET_PAGE', page: selectedPage });
    }
  };

  const changeLimit = (limit: number) => {
    dispatch({ type: 'SET_LIMIT', limit });
  };

  useEffect(() => {
    const loadProducts = async () => {
      dispatch({ type: 'FETCH_PRODUCTS_BEGIN' });
      try {
        const payload = await getAllProducts({
          offset: (Math.max(1, page) - 1) * limit,
          limit,
          search,
        });
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: payload.data });
      } catch (error) {
        dispatch({ type: 'FETCH_PRODUCTS_ERROR', error });
      }
    };
    loadProducts();
  }, [dispatch, page, limit, search]);

  useEffect(() => {
    const queries = queryString.parse(location.search);
    const newQueryString = queryString.stringify({
      ...queries,
      page,
      limit,
    });
    navigate(`/?${newQueryString}`);
    // eslint-disable-next-line
  }, [page, limit]);

  return (
    <div className="ProductList">
      {!loading ? (
        <>
          <Row>
            <div className="w-100">
              <div className="ProductList-Header">
                {productsCount > 0 && (
                  <h6>
                    {productsCount}{' '}
                    {productsCount !== 1
                      ? 'produtos encontrados'
                      : 'produto encontrado'}
                  </h6>
                )}
              </div>
              {products.map((p) => (
                <ProductItem key={p.id} product={p} />
              ))}
              {productsCount === 0 && <h6>Nenhum produto encontrado :(</h6>}
            </div>
          </Row>
          {productsCount > 0 && (
            <Row className="Footer mt-5">
              <Col sm={4}>
                <PaginationLimit onSelect={changeLimit} value={limit} />
              </Col>
              <Col sm={8}>
                <PaginationOffset
                  onClick={changePage}
                  totalPages={totalPages}
                  currentPage={page}
                />
              </Col>
            </Row>
          )}
        </>
      ) : (
        <Spinner className="ProductList-Spinner" color="primary" />
      )}
    </div>
  );
}
