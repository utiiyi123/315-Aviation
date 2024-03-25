import React from 'react'
import image from '../Images/N903JT-99.jpg'

export const News = () => {
  return (
    <div className='pt-20'>
        <div>
            <h1 className='px-10 lg:px-20 text-6xl text-indigo-400 font-semibold'>Newsletters</h1>
            <hr className='border-t-2 border-indigo-400 mt-2'></hr>
        </div>
        <div className='px-10 lg:px-20 pt-4'>
            <div className='lg:px-40'>
                <p className='pt-2'>Global Elite Aviation now publishes a quarterly newsletter.  In this newsletter you can 
                   expect to find current intel regarding factory new and pre-owned market conditions, 
                   as well as learn recent announcements about the HondaJet and Honda Aircraft Company.  
                   We will also provide knowledgeable and seasoned advise regarding selling and purchasing a 
                   HondaJet.  If you would like to be added to our mailing list please fill out a contact form below, 
                   and we will let you know as soon as we have published the next quarter's newsletter.
                </p>
                <img src={image} alt='#' className='pt-6 h-100'/>
            </div>
        </div>
    </div>
  )
}
