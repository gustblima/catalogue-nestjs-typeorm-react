import React, { useEffect } from 'react';
import { ProductList } from '../../components';
import { useLocation } from '@reach/router';
import { parse } from 'query-string';
import useProducts from '../../context/products';
import { Row, Container } from 'reactstrap';
import './Home.scss';

function Home() {
  const { search } = useLocation();
  const { dispatch, state: { search : searchStored, page: pageStored, limit: limitStored }} = useProducts();
  useEffect(() => {
    const { search: searchParam, page: pageParam, limit: limitParam } = parse(search)
    if(searchParam && searchParam !== searchStored || limitParam && +limitParam !== limitStored || pageParam && +pageParam !== pageStored ) {
      dispatch({ type: 'RESTORE_PAGINATION', payload: {
        search: searchParam as string, 
        page: +(pageParam || pageStored),
        limit: +(limitParam || limitStored)
      }});
    }
  }, []);
  return (
    <div className='Home'>
      {searchStored && 
      <div className='Home-Title'>
        <h2>{searchStored}</h2>
      </div>}
      <Container className='mb-5'>
        <ProductList />
      </Container>
    </div>
  )
}

export default Home;
