import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to='/products/book'>A Book</Link>
        </li>
        <li>
          <Link to='/products/chair'>A Chair</Link>
        </li>
        <li>
          <Link to='/products/laptop'>A Laptop</Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
