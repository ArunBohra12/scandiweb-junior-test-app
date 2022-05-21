const Button = props => {
  const { classes, id, children, ...otherButtonAttributes } = props;
  return (
    <button className={`btn btn-dark ${classes}`} id={id} {...otherButtonAttributes}>
      {children}
    </button>
  );
};

export default Button;
