import { useEffect } from 'react';

const PageNotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found';
  }, []);

  return (
    <h1 className='heading-404' style={{ paddingTop: '6rem' }}>
      Oops, the page you are looking for is not present.
    </h1>
  );
};

export default PageNotFound;
