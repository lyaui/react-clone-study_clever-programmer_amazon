import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
  const [{ basket }] = useStateValue();
  console.log(basket);
  console.log(getBasketTotal(basket));
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):{value}
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              This order contains
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'£'}
      ></CurrencyFormat>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
