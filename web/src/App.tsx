import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import { Container, Row, Col } from 'reactstrap';
import { ProductsProvider } from './context/products'
import Home from './pages/Home/Home'
import './App.scss';
import { Searchbar } from './components';

let HomePage = (props: RouteComponentProps) => <Home/>
function App() {
  return (
    <div>
      <ProductsProvider>
          <header className="App-header">
            <Row>
              <Col>
                MMartan
              </Col>
              <Col>
                <Searchbar value={'a'} onSearch={() => null} />
              </Col>
            </Row>
          </header>
          <Container className="App">
          <Router>
            <HomePage path="/" />
          </Router>
        </Container>
      </ProductsProvider>
    </div>
  );
}

export default App;
