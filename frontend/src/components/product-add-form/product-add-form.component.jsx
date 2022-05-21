import React, { useState } from 'react';
import FormGroup from '../form-group/form-group.component';
import TypeSwitch from '../type-switch/type-switch.component';

const ProductAddForm = () => {
  const [errorMsg, setErrorMessage] = useState(null);

  const handleCreateRequest = productData => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    };

    fetch(process.env.REACT_APP_BASE_URL + '/add-product', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.status === false) {
          setErrorMessage(data.message);
          return;
        }

        window.location.pathname = '/';
      })
      .catch(err => console.error(err));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const productAddForm = document.forms.product_form;
    const formData = new FormData(productAddForm);

    const name = formData.get('name'),
      sku = formData.get('sku'),
      price = formData.get('price'),
      type = formData.get('productType'),
      height = formData.get('height'),
      width = formData.get('width'),
      length = formData.get('length'),
      size = formData.get('size'),
      weight = formData.get('weight');

    const productData = { name, sku, price, type, height, width, length, size, weight };

    if (!name || !sku || price == null || !type) {
      setErrorMessage('Please fill all of the required fields');
      return;
    }

    if (size || weight || (height && width && length)) {
      handleCreateRequest(productData);
    } else {
      setErrorMessage('Please fill all of the product attributes');
      return;
    }
  };

  return (
    <form id='product_form' onSubmit={handleSubmit}>
      {errorMsg ? (
        <div className='form-group form-error'>
          <p>{errorMsg}</p>
          <span className='form-error-cross' onClick={() => setErrorMessage(null)}>
            &times;
          </span>
        </div>
      ) : null}

      <FormGroup inputType='text' id='sku' label='SKU' min={1} />
      <FormGroup inputType='text' id='name' label='Name' min={1} />
      <FormGroup inputType='number' id='price' label='Price ($)' min={1} />
      <TypeSwitch />
    </form>
  );
};

export default ProductAddForm;
