import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from './Icons';

import './Header.css';

function Header() {
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png'
          alt='Amazon'
        />
      </Link>
      <div className='header__search'>
        <input className='header__searchInput' type='text' />
        <Icons.search className='header__searchIcon'></Icons.search>
      </div>

      <div className='header__nav'>
        <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Hello Iris</span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>
        <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            <Icons.basket></Icons.basket>
            <span className='header__optionLineTwo header__baseketCount'>0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
