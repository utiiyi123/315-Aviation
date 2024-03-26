import React from 'react';
import img1 from '../Images/N903JT-91.jpg';
import img3 from '../Images/N903JT-99.jpg';

export const Information = () => {
    const backimg1 = {
        backgroundImage: `url(${img1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    };

    const backimg3 = {
        backgroundImage: `url(${img3})`,
        height: '60vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    };

    return (
        <div className='pt-20 px-20 lg:px-40'>
                <div className='lg:flex text-center'>

                    <div className='w-full text-center'>

                        <div className=' lg:ml-[10%] text-white '>
                            <div className='lg:w-70 pt-10 relative' style={backimg1}>
                              <div  className='bg-black absolute w-full h-full opacity-60'></div>
                                <h1 className='z-10 font-bold text-2xl'>Buy an Aircraft</h1>
                                <p className='z-10 pt-5 text-sm md:text-md lg:text-lg hover:text-red-600 cursor-pointer font-semibold'>
                                   Buying an aircraft should be a fun and enjoyable experience.  It is our goal to 
                                   help you find the right airplane to fit your needs.  We take a consultative 
                                   approach to achieve the best outcome - an airplane that you are excited about!
                                </p>  
                                <a href='/buy' className='z-10 mt-2 font-bold bg-opacity-10 bg-red-200 text-red-600 hover:text-white hover:bg-red-500 w-40 p-2'>Buy</a>
                            
                            </div>
                        </div>
                    </div>

                    
                    <div className='pt-10 lg:pt-0 w-full'>

                        <div className=' lg:ml-[10%] text-white '>
                            <div className='lg:w-70 pt-10 relative' style={backimg3}>
                              <div  className='bg-black absolute w-full h-full opacity-60'></div>
                                <h1 className='z-10 font-bold text-2xl'>Sell an Aircraft</h1>
                                <p className='z-10 pt-5 text-sm md:text-md  hover:text-red-600 lg:text-lg font-semibold cursor-pointer'>
                                   Whether your aircraft has helped you connect with loved ones, grow your business, 
                                   or achieve your aviation goals - it has played a huge role in your life.  
                                   We understand the importance of this and will represent your aircraft with the 
                                   highest level of care and attention to detail
                                </p>
                                <a href='/sell' className='z-10 font-bold bg-opacity-10 bg-red-200 text-red-600 hover:text-white hover:bg-red-500 w-40 p-2 mt-2'>Sell</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Information;
