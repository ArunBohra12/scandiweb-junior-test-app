import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProductList from './pages/product-list/product-list';
import PageNotFound from './pages/404-page/404-page';
import ProductAdd from './pages/product-add/product-add';
import Footer from './components/footer/footer.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' component={ProductList} />
          <Route exact path='/add-product' component={ProductAdd} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
