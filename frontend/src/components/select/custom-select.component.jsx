const CustomSelect = props => {
  const { label, id, defaultValue, handleChange, options, ...otherSelectAttributes } = props;

  return (
    <>
      {label ?? <label htmlFor={id}>{label}</label>}

      <select id={id} defaultValue={defaultValue} onChange={handleChange} {...otherSelectAttributes}>
        {options.map(option => {
          return (
            <option key={option.key} value={option.value} disabled={option.disabled ? true : false}>
              {option.text}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default CustomSelect;
