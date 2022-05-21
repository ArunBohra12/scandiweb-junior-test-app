import CustomInput from '../input/input.component';

const FormGroup = props => {
  const { inputType, id, label, ...otherInputAttributes } = props;
  return (
    <div className='form-group'>
      <label htmlFor={id}>{label}</label>
      <CustomInput type={inputType} id={id} {...otherInputAttributes} />
    </div>
  );
};

export default FormGroup;
