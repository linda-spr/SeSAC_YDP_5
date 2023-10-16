import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  console.log(product); // {id, name, email, body }

  return (
    <>
      <Link to={`/products/${product.id}`}>
        <ul>
          <li>상풍명: {product.name}</li>
          <li>상세설명: {product.body}</li>
        </ul>
      </Link>
      <hr />
    </>
  );
}