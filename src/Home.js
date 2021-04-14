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
          id={0}
          title={
            'Led Strip Light Phopollo Ultra Long 10m Multi-Colour Light Strip with Remote 5050 Rope Lights for Home, Room, Kitchen, TV, Party Decorative and Lighting，1pcs x 10m'
          }
          price={14.44}
          rating={5}
          img={'https://images-na.ssl-images-amazon.com/images/I/51PBpRi6UvL._AC_SY400_.jpg'}
        ></Product>
        <Product
          id={1}
          title={
            'Wepro Pack 3 Straps Compatible with Apple Watch Strap 38mm 42mm 40mm 44mm, Soft Silicon Replacement Strap Compatible with iWatch Series 6, Series 5, 4, 3, 2, 1, SE-38mm 40mm S/M Aqua/White/Pink'
          }
          price={12.99}
          rating={3}
          img={'https://images-na.ssl-images-amazon.com/images/I/6163cAvmZwL._AC_SX679_.jpg'}
        ></Product>
      </div>
      <div className='home__row'>
        <Product
          id={2}
          title={
            'ENUOLI Neon Cloud Lights Pink Neon Light Neon Lights for Walls Neon Wall Light Cloud Neon Light Signs Neon Night Light for Girls Bedroom Cloud Neon Light Battery/USB Operated Light up Your Home Party'
          }
          price={12.99}
          rating={4}
          img={'https://images-na.ssl-images-amazon.com/images/I/71DRckJXCAL._AC_SX679_.jpg'}
        ></Product>
        <Product
          id={3}
          title={
            'CQURE Artificial Ivy Garland,Ivy Garland Fake Ivy UV Resistant Fake Vine Green Leaves Fake Plants Hanging Vine Plant for Wedding Party Garden Wall Decoration 5 Packs'
          }
          price={11.89}
          rating={5}
          img={'https://images-na.ssl-images-amazon.com/images/I/911MqDX%2BEvL._AC_SL1500_.jpg'}
        ></Product>
        <Product
          id={4}
          title={
            'Colorful Art Co. Acrylic Paint Pens – Premium, Permanent, Waterproof Pen 12 Pack w/Reversible 3-5mm Brush Tips – Vibrant Painting Markers for Rocks, Wood, Glass, Fabric & Stone - Craft Supplies'
          }
          price={9.99}
          rating={3}
          img={'https://images-na.ssl-images-amazon.com/images/I/81hj-%2BkFAJL._AC_SL1500_.jpg'}
        ></Product>
      </div>
      <div className='home__row'>
        <Product
          id={5}
          title={
            'Globe Festoon String Light Bulb 27Ft G40 Indoor Outside Waterproof Lixada, Warm White'
          }
          price={15.99}
          rating={4}
          img={'https://images-na.ssl-images-amazon.com/images/I/61X-WEmVtmL._AC_SL1024_.jpg'}
        ></Product>
      </div>
    </div>
  );
}

export default Home;
