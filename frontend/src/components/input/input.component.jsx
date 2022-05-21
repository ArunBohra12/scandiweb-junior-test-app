const CustomInput = props => {
  const { type, id, ...otherInputAttributes } = props;
  return <input type={type} id={id} name={id} {...otherInputAttributes} />;
};

export default CustomInput;
