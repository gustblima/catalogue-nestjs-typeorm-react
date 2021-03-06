import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import { ProductsProvider } from './context/products';
import Home from './pages/Home/Home';
import './App.scss';
import { Header } from './components';

const HomePage = (props: RouteComponentProps) => <Home />;

function App() {
  return (
    <div>
      <ProductsProvider>
        <Header />
        <div className="App">
          <Router>
            <HomePage path="/" />
          </Router>
        </div>
      </ProductsProvider>
    </div>
  );
}

export default App;
