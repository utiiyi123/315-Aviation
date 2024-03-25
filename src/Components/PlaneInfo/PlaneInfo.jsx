import React from 'react'
import plane1 from '../Images/Exterior_Doors_Open_007 copy.jpg'
import plane2 from '../Images/N903JT-91.jpg'
import plane3 from '../Images/Exterior_Doors_Open_010 copy.jpg'

export const PlaneInfo = () => {
  return (
    <div className='pt-20 px-10 lg:px-20'>
        <div className='lg:flex lg:justify-between'>
            <div className='bg-zinc-100 shadow-lg'>
                <img src={plane1} alt='' className='h-80'/>
                <div className='p-4'>
                    <p className='font-serif text-[13px]'>Feb 28</p>
                    <h1 className='font-semibold text-xl pt-4 hover:text-red-600 cursor-pointer'>Soaring to New Heights: SmartSky Networks WiFi and the HondaJet Join Forces</h1>
                    <p className='pt-4 font-serif hover:text-red-600 cursor-pointer'>In the ever-evolving landscape of aviation technology, staying connected is no longer
                    a luxury but a necessity. SmartSky Networks has...
                    </p>
                </div>
            </div>
            <div className='bg-zinc-100 shadow-lg ml-4'>
                <img src={plane2} alt='' className='h-80'/>
                <div className='p-4'>
                    <p className='font-serif text-[13px]'>Jul 30, 2023</p>
                    <h1 className='font-semibold text-xl pt-4 hover:text-red-600 cursor-pointer'>Hot Summer Days, Slightly Cool Market, but Still a Sunny Outlook Plane</h1>
                    <p className='pt-4 font-serif hover:text-red-600 cursor-pointer'>As we look to the second half of the year, dealers are “cautiously optimistic” staying connected is no longer a luxury but a necessity.</p>
                </div>
            </div>
            <div className='bg-zinc-100 shadow-lg ml-4'>
                <img src={plane3} alt='' className='h-80'/>
                <div className='p-4'>
                <p className='font-serif text-[13px]'>Jun 15, 2023</p>
                <h1 className='font-semibold text-xl pt-4 hover:text-red-600 cursor-pointer'>Learning All About the New HondaJet Elite II: A Q&A with HJOPA Co-Founder & President</h1>
                <p className='pt-4 font-serif hover:text-red-600 cursor-pointer'>Not only was Mark the first owner operator to take delivery of a new Elite II, but he was also the very
                   first HondaJet owner ever!
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}
