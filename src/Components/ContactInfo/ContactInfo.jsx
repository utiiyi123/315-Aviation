import React from 'react'

export const ContactInfo = () => {
  return (
    <div className='pt-20 px-10 lg:px-20'>
        <div className='pt-20 lg:px-20'>
            <h1 className='text-3xl font-sans text-center font-serif'>Contact Information</h1>
            <hr className='w-[20%] ml-[40%] justify-center mt-4 border-t-4 border-indigo-400'/>
            <h1 className='text-center pt-20 text-2xl lg:text-5xl font-bold text-indigo-400 font-mono'>I'd Like to Buy / Sell a HondaJet</h1>
        
            <div className='md:flex px-10 lg:flex pt-20 justify-between'>
                <div className='grid gap-8 w-[35%]'>
                    <input className='border-black border-0 border-b-2 focus:outline-none' placeholder='FirstName'/>
                    <input className='border-black border-0 border-b-2 focus:outline-none' placeholder='E-mail'/>
                </div>
                <div className='grid lg:pt-0 md:pt-0 pt-10 gap-8 w-[35%]'>
                    <input className='border-black border-0 border-b-2 focus:outline-none' placeholder='LastName'/>
                    <input className='border-black border-0 border-b-2 focus:outline-none' placeholder='Phone'/>
                </div>
            </div>

            <div className='pt-5 px-10'>
                <p className='text-sm italic font-bold'>I am interested to:</p>
                <div className='flex pt-2'>
                    <input className='pt-2' type="checkbox" />
                    <p className='pl-4 font-bold'>Buy a Hond Jet</p>
                </div>
                <div className='flex pt-2'>
                    <input className='pt-2' type="checkbox" />
                    <p className='pl-4 font-bold'>Sell a Hond Jet</p>
                </div>
            </div>

            <input className='border-black w-full pt-20 border-0 border-b-2 focus:outline-none' placeholder='Message'/>
            <button className='bg-red-500 text-white w-40 lg:w-60 p-4 mt-10 float-end'>Submit</button>

        </div>
    </div>
  )
}
