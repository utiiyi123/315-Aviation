import React from 'react';
import Heroimage from '../Images/AboutHero.jpg';

export const AboutHero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Heroimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  };

  return (
    <div className='pt-20'>
        <div style={backgroundStyle}> 
          <h1 className='pt-80 text-6xl font-serif font-semibold text-center text-white'>About</h1>
          <hr className='mt-6 border-t-4 border-white'></hr>
        </div>
    </div>
  );
};

