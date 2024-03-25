import React from 'react'
import logo4 from '../Images/logo_4.png'

export const Global = () => {
  return (
    <div className='pt-20 px-10 lg:px-20'>
        <div className='bg-zinc-900 p-5 lg:p-10 pt-20'>
            <div className='lg:flex lg:flex-row text-white lg:justify-between w-full'>
                <div className='lg:w-6/12'>
                    <div className='flex'>
                        <h1 className='text-2xl md:text-7xl lg:text-7xl italic font-thin'>The</h1>
                        <h1 className='ml-2 text-2xl md:text-7xl lg:text-7xl font-thin'> Global Elite</h1>
                    </div>
                        <h1 className='font-bold text-2xl md:text-7xl lg:text-7xl ml-24 mt-4'>HondaJet</h1>
                    <div className='flex'>
                        <img src={logo4} alt='' className='h-40 w-40 -mt-6 lg:-mt-4 relative'/>
                        <h1 className='text-xl md:text-6xl lg:text-6xl mt-4 italic font-thin'>Advantage</h1>
                    </div>
                </div>

                <div className='lg:w-6/12'>
                    <h1 className='lg:text-xl pt-4 font-bold'>The Global Authority in HondaJet Aircraft Sales</h1>
                    <p className='lg:text-lg pt-6 font-mono'>The only Aircraft Brokerage and Acquisition Firm in the world dedicated exclusively
                       to the HondaJet.  Global Elite Aviation has achieved more HondaJet sales transactions 
                       than any other Brokerage and Acquisition company globally, with unparalleled knowledge 
                       and experience, matched only by Honda Aircraft Company.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
