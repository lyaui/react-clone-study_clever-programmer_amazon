import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <img
        src='https://328897-1008310-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/Purple-Display-Ad-Example-728-X-90-1.jpg'
        alt=''
        className='checkout__ad'
      />
      {basket?.length === 0 ? (
        <div>
          <h2 className='checkout__title'>Your Shopping Basket is empty</h2>
          <p>You have no items in your basket. To buy one or "Add to basket" next to the item.</p>
        </div>
      ) : (
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              item={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
            ></CheckoutProduct>
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
