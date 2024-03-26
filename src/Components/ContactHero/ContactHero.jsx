import React from 'react';
import ContHero from '../Images/ContHero.jpg';

export const ContactHero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${ContHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  };

  return (
    <div className='pt-20 '>
        <div style={backgroundStyle}>
          <h1 className='pt-80 text-6xl font-serif font-semibold text-center text-white'>Contact</h1>
          <hr className='mt-6 border-t-4 border-white'></hr>
        </div>

        <div className='pt-60 px-10 lg:px-20'>
          <div className='lg:w-[24%]'>
              <h1 className='text-3xl font-sans'>Contact Information</h1>
              <hr className='lg:w-[24%] w-[50%] lg:w-full mt-4 border-t-4 border-indigo-400'></hr>
              <div className='text-center text-xl'>
                  <p className='pt-6'>Global Elite Aviation, LLC</p>
                  <p>1052 North Access Road</p>
                  <p>San Francisco, CA 94128</p>
                  <p className='pt-4'>stalucci@315aviation.com</p>
                  <p>914.908.0844</p>
              </div>
          </div>
        </div>
    </div>
  );
};

