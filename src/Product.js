import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, img }) {
  const [, dispatch] = useStateValue();
  const handleAddBtnClick = (id) => {
    return () => {
      dispatch({ type: 'ADD_TO_BASKET', payload: { id, title, price, rating, img } });
    };
  };
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
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
      </div>
      <img src={img} alt='' />
      <button onClick={handleAddBtnClick(id)}>Add to basket</button>
    </div>
  );
}

export default Product;
