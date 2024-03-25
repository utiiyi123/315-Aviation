import React from 'react';
import Heroimage from '../Images/Heroimage.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Heroimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  };

  return (
    <div className='pt-20'>
      
      {/* <LazyLoadImage 
            src={Heroimage}
            /> */}
      
        <div>
          {/* <h1 className='text-6xl pt-60 md:text-6xl lg:text-6xl font-serif font-semibold text-center text-white'>HondaJet Aircraft</h1>
          <h1 className='mt-6 border-t-4 border-white pt-5 text-xl md:text-5xl lg:text-5xl font-serif font-semibold text-center text-white'>Brokerage, Acquisition & Consulting Services</h1> */}
        </div>
    </div>
  );
};

