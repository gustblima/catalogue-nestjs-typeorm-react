import React, { useEffect } from 'react';
import ProductList from '../../components/ProductList';
import { useLocation } from '@reach/router';
import { parse } from 'query-string';
import useProducts from '../../context/products';
import { Row } from 'reactstrap';

function Home() {
  const { search } = useLocation();
  const { dispatch, state: { search : searchString }} = useProducts();
  useEffect(() => {
    const searchParam = parse(search).search as string
    if(searchParam) {
      dispatch({ type: 'SET_SEARCH', search: searchParam });
    }
  }, []);
  return (
    <>
      {searchString && 
      <Row>
        <h1>{searchString}</h1>  
      </Row>}
      <ProductList />
    </>
  )
}

export default Home;
