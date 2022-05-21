import React from 'react';

import Header from '../../components/header/header.component';
import ProductAddForm from '../../components/product-add-form/product-add-form.component';

const ProductAdd = () => {
  return (
    <div>
      <Header pageName='Product Add' page={2} />
      <main className='main'>
        <ProductAddForm />
      </main>
    </div>
  );
};

export default ProductAdd;
