import React, { useEffect } from 'react';
import { ProductList } from '../../components';
import { useLocation } from '@reach/router';
import { parse } from 'query-string';
import useProducts from '../../context/products';
import { Row, Container } from 'reactstrap';
import './Home.scss';

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
    <div className='Home'>
      {searchString && 
      <div className='Home-Title'>
        <h2>{searchString}</h2>
      </div>}
      <Container>
        <ProductList />
      </Container>
    </div>
  )
}

export default Home;
