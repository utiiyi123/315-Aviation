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
                    <h1 className='lg:text-lg pt-4 font-semibold'>We enjoy watching our customers succeed.  Whether you’re a first time buyer or a seasoned aircraft owner,
                        we are here to help you take on your next adventure.
                    </h1>
                    <p className='lg:text-md pt-6 font-mono'>Sarah has been in the aviation industry for 15 years.  
                       In her previous roles, she has worked as a Flight Instructor and Check Instructor for a Part 
                       141 flight school, flown as a Captain on a PC-12 for a 91k/135 operator, and spent 6 years 
                       selling factory new aircraft for an OEM.  She is well versed in fractional and whole aircraft 
                       ownership and specializes in Pilatus, Cirrus, HondaJet, and Embraer product lines.  To date, 
                       Sarah has been responsible for over 150 aircraft transactions, totaling over $120M and holds 
                       her CFI/CFII, AGI/IGI, Commercial SEL, and ATP MEL certificates. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
