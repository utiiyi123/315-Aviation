import React from 'react'
import Heroimage from '../Images/AboutHero.jpg'
import Planeimage from '../Images/N903JT-91.jpg'

export const Sell = () => {

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
           <h1 className='text-6xl pt-60 lg:pt-80 md:text-6xl lg:text-6xl font-serif font-semibold text-center text-white'>Sell an Aircraft</h1>
          <h1 className='mt-6 border-t-4 border-white pt-5text-white'></h1>
    </div>

    <div className='pt-20 px-10 lg:px-20'>
        <div>
            <h1 className='text-4xl font-sans font-bold'>Sell An Aircraft</h1>
            <hr className='lg:w-[15%] w-[50%] mt-4 border-t-4 border-indigo-400'></hr>
        </div>
        <div className='pt-10'>
            <p className='text-lg'>Whether your aircraft has helped you connect with loved ones, grow your business, 
               or achieve your aviation goals - it has played a huge role in your life.  We understand the 
               importance of this and will represent your aircraft with the highest level of care and attention to 
               detail.
            </p>
        </div>
        <div className='pt-5'>
            <h1 className='font-bold text-lg'>Here’s our process:</h1>
        </div>
        <div className=' mt-4 p-4 grid gap-2 px-10 bg-gray-200 rounded-lg'>
            <p>o	We want to understand your goals for listing and selling your aircraft.  Let’s discuss why you want to sell your airplane and if there is a specific timeframe or price point you have in mind</p>
            <p>o	We’ll use our networks to announce, market, and showcase your aircraft</p>
            <p>o	We’ll work to get the airplane under contract, and guide you through the negotiation and pre-purchase inspection</p> 
            <p>o	We’ll help you close the deal and transfer ownership of your aircraft</p>
            <p>o	Whether it’s time to step away or step up - we are ready to help you get started on your new adventure</p>
        </div>

        <div className='pt-20'>
            <img src={Planeimage} alt='#'/>
        </div>
    </div>
    </div>
  )
}
