import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button.component';

const Header = props => {
  const { pageName, page, handleDelete } = props;

  useEffect(() => {
    document.title = pageName;
  });

  return (
    <header className='header'>
      <div className='page-name'>{pageName}</div>

      {page === 1 ? (
        <div className='actions'>
          <Link className='btn btn-light add-btn' to='/add-product'>
            ADD
          </Link>
          <Button classes='mass-delete-btn' id='delete-product-btn' onClick={handleDelete}>
            MASS DELETE
          </Button>
        </div>
      ) : page === 2 ? (
        <div className='actions'>
          <Button classes='save-btn' id='save-product-btn' form='product_form' type='submit'>
            Save
          </Button>
          <Link className='btn btn-light add-btn' to='/'>
            Cancel
          </Link>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
