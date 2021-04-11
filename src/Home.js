import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__img'
        src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg'
        alt=''
      />
      <div className='home__row'>
        <Product
          id={123}
          title={
            'Led Strip Light Phopollo Ultra Long 10m Multi-Colour Light Strip with Remote 5050 Rope Lights for Home, Room, Kitchen, TV, Party Decorative and Lighting，1pcs x 10m'
          }
          price={14.44}
          rating={5}
          img={'https://images-na.ssl-images-amazon.com/images/I/51PBpRi6UvL._AC_SY400_.jpg'}
        ></Product>
        <Product
          id={123}
          title={
            'Led Strip Light Phopollo Ultra Long 10m Multi-Colour Light Strip with Remote 5050 Rope Lights for Home, Room, Kitchen, TV, Party Decorative and Lighting，1pcs x 10m'
          }
          price={14.44}
          rating={5}
          img={'https://images-na.ssl-images-amazon.com/images/I/51PBpRi6UvL._AC_SY400_.jpg'}
        ></Product>
      </div>
      <div className='home__row'>
        <Product
          id={123}
          title={
            'Led Strip Light Phopollo Ultra Long 10m Multi-Colour Light Strip with Remote 5050 Rope Lights for Home, Room, Kitchen, TV, Party Decorative and Lighting，1pcs x 10m'
          }
          price={14.44}
          rating={5}
          img={'https://images-na.ssl-images-amazon.com/images/I/51PBpRi6UvL._AC_SY400_.jpg'}
        ></Product>
        <Product
          id={123}
          title={
            'Led Strip Light Phopollo Ultra Long 10m Multi-Colour Light Strip with Remote 5050 Rope Lights for Home, Room, Kitchen, TV, Party Decorative and Lighting，1pcs x 10m'
          }
          price={14.44}
          rating={5}
          img={'https://images-na.ssl-images-amazon.com/images/I/51PBpRi6UvL._AC_SY400_.jpg'}
        ></Product>
        <Product
          id={123}
          title={
            'Led Strip Light Phopollo Ultra Long 10m Multi-Colour Light Strip with Remote 5050 Rope Lights for Home, Room, Kitchen, TV, Party Decorative and Lighting，1pcs x 10m'
          }
          price={14.44}
          rating={5}
          img={'https://images-na.ssl-images-amazon.com/images/I/51PBpRi6UvL._AC_SY400_.jpg'}
        ></Product>
      </div>
      <div className='home__row'>
        <Product
          id={123}
          title={
            'Led Strip Light Phopollo Ultra Long 10m Multi-Colour Light Strip with Remote 5050 Rope Lights for Home, Room, Kitchen, TV, Party Decorative and Lighting，1pcs x 10m'
          }
          price={14.44}
          rating={5}
          img={'https://images-na.ssl-images-amazon.com/images/I/51PBpRi6UvL._AC_SY400_.jpg'}
        ></Product>
      </div>
    </div>
  );
}

export default Home;
