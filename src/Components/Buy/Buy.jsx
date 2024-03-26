import React from 'react'
import Heroimage from '../Images/AboutHero.jpg'
import Planeimage from '../Images/N903JT-91.jpg'

export const Buy = () => {

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
           <h1 className='text-6xl pt-60 lg:pt-80 md:text-6xl lg:text-6xl font-serif font-semibold text-center text-white'>Buy an Aircraft</h1>
          <h1 className='mt-6 border-t-4 border-white pt-5text-white'></h1>
    </div>

    <div className='pt-20 px-10 lg:px-20'>
        <div>
            <h1 className='text-4xl font-sans font-bold'>Buy An Aircraft</h1>
            <hr className='lg:w-[15%] w-[50%] mt-4 border-t-4 border-indigo-400'></hr>
        </div>
        <div className='pt-10'>
            <p className='text-lg'>Buying an aircraft should be a fun and enjoyable experience.  It is our goal to help you find the 
               right airplane to fit your needs.  We take a consultative approach to achieve the best outcome - an 
               airplane that you are excited about
            </p>
        </div>
        <div className='pt-5'>
            <h1 className='font-bold text-lg'>Here’s our process:</h1>
        </div>
        <div className=' mt-4 p-4 grid gap-2 px-10 bg-gray-200 rounded-lg'>
            <p>o	We want to understand your goals for aircraft ownership and how you’ll use your plane.  Let’s discuss your timeframe, budget, and what size aircraft you’ll need in terms of range and carrying capacity</p>
            <p>o	We’ll use our network of industry professionals and aircraft owners to find the right aircraft for you</p>
            <p>o	We’ll work to get an airplane under contract with the right negotiating strategy, keeping pricing and pre-purchase inspections in mind</p> 
            <p>o	We’ll help you close the deal, where we’ll guide you through funding, insurance, titling, and ownership transfer of your new aircraft</p>
            <p>o	Then, the best part - Delivery day!  We’ll connect you to additional resources to make sure that you are well equipped to own and fly your aircraft</p>
        </div>

        <div className='pt-20'>
            <img src={Planeimage} alt='#'/>
        </div>
    </div>
    </div>
  )
}
