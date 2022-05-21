import React from 'react';
import Header from '../../components/header/header.component';
import Product from '../../components/product/product.component';

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      allProductList: [],
    };

    this.productsToDelete = {};
  }

  fetchProducts() {
    fetch(process.env.REACT_APP_BASE_URL + '/all-products')
      .then(response => response.json())
      .then(data => this.setState({ allProductList: data }));
  }

  componentDidMount = () => this.fetchProducts();

  handleMassDelete = () => {
    const productDeleteData = Object.keys(this.productsToDelete);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productDeleteData),
    };
    fetch(process.env.REACT_APP_BASE_URL + '/delete-product', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.status) this.fetchProducts();
      });
  };

  handleCheckProduct = (id, checked) => {
    if (checked && !this.productsToDelete.id) {
      this.productsToDelete[id] = true;
    } else {
      delete this.productsToDelete[id];
    }
  };

  render() {
    return (
      <div>
        <Header pageName='Product List' page={1} handleDelete={this.handleMassDelete} />
        <main className='main'>
          <section className='all-products'>
            {this.state.allProductList.status === false ? (
              <h2>No data found</h2>
            ) : (
              this.state.allProductList.map((product, i) => (
                <Product key={i} productData={product} handleCheckProduct={this.handleCheckProduct} />
              ))
            )}
          </section>
        </main>
      </div>
    );
  }
}

export default ProductList;
