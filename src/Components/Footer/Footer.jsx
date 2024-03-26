import React from 'react'
import insta from '../Images/Instagram.png'
import faceb from '../Images/facebook.png'
import linkdin from '../Images/linkedin.png'
import twitt from '../Images/twitter.png'

export const Footer = () => {
  return (
    <div className='pt-40'>
        <div className='bg-zinc-900 lg:flex pt-20 lg:p-40 text-white text-center lg:justify-between'>
            <div className='grid gap-2'>
                <h1 className='text-xl lg:text-4xl'>Contact :</h1>
                <p className='lg:text-xl'>stalucci@315aviation.com</p>
            </div>
            <div className='pt-8 lg:pt-0 grid gap-4'>
                <a className='hover:text-red-600' href='/'>Home</a>
                <a className='hover:text-red-600' href='/about'>About</a>
                <a className='hover:text-red-600' href='/inventory'>Inventory</a>
                <a className='hover:text-red-600' href='/flightlogic'>Flight Logic</a>
                <a className='hover:text-red-600' href='/contact'>Contact Us</a>
            </div>
            <div className='pt-8 lg:pt-0 grid'>
                <h1 className='text-xl lg:text-4xl'>Follow Us</h1>
                <div className='flex pt-4 justify-center'>
                    <img src={linkdin} alt='#' className='h-10 w-10'/>
                    <img src={faceb} alt='#' className='h-10 w-10 ml-2'/>
                    <img src={twitt} alt='#' className='h-10 w-10 ml-2'/>
                    <img src={insta} alt='#' className='h-10 w-10 ml-2'/>
                </div>
            </div>
        </div>
    </div>
  )
}
