const Product = props => {
  const { sku, name, price, size, weight, height, width, length } = props.productData;
  const { handleCheckProduct } = props;
  return (
    <div className='product text-center'>
      <input
        type='checkbox'
        className='checkbox-input delete-checkbox'
        id='test'
        onClick={e => handleCheckProduct(sku, e.target.checked)}
      />
      <div className='sku'>{sku}</div>
      <div className='product-name'>{name}</div>
      <div className='product-price'>
        <span className='price-value'>{price}</span> $
      </div>
      <div className='product-attribute'>
        {`${(size && 'Size') || (weight && 'Weight') || (height && width && length && 'Dimentions')}`}:&nbsp;
        {`${
          (size && size + ' MB') ||
          (weight && weight + ' KG') ||
          (height && width && length && `${height} x ${width} x ${length} CM`) ||
          ''
        }`}
      </div>
    </div>
  );
};

export default Product;
