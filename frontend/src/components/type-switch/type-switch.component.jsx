import React, { useState } from 'react';
import FormGroup from '../form-group/form-group.component';
import CustomSelect from '../select/custom-select.component';
import { productTypeValuesList as productTypeValues } from '../../pages/product-add/product-type-values';
import { productTypeOptionsList as productTypeOptions } from '../../pages/product-add/product-type-options';

const TypeSwitch = () => {
  const [productType, setProductType] = useState(null);

  const handleTypeChange = event => setProductType(event.target.value);

  const selectedType = productType?.toLowerCase();

  return (
    <>
      <div className='form-group'>
        <CustomSelect
          label='Type Switcher'
          id='productType'
          name='productType'
          defaultValue='type'
          handleChange={handleTypeChange}
          options={productTypeOptions}
        />
      </div>

      <div>
        <div className='form-group product-specific-form'>
          {productType !== null ? (
            <>
              <p className='product-description'>
                <strong>{productTypeValues[selectedType].title}</strong>
              </p>

              {productTypeValues[selectedType].inputs.map(input => (
                <FormGroup key={input.key} inputType={input.type} id={input.id} label={input.label} min={1} />
              ))}

              <p className='product-description'>{productTypeValues[selectedType].description}</p>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default TypeSwitch;
