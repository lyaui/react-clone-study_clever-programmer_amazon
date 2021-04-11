import React from 'react';
import './Product.css';

function Product({ id, title, price, rating, img }) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>£</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className='product__rating'>
        {Array(rating)
          .fill()
          .map((_) => (
            <p>⭐</p>
          ))}
      </div>
      <img src={img} alt='' />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
