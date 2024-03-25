import React from 'react';
import img1 from '../Images/img1.avif';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.webp';

export const Information = () => {
    const backimg1 = {
        backgroundImage: `url(${img1})`,
        backgroundPosition: 'center',
        height: '60vh',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    };

    const backimg2 = {
        backgroundImage: `url(${img2})`,
        height: '60vh',
        backgroundPosition: 'center',
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
                                <h1 className='z-10 font-bold text-2xl'>HondaJet Acquisition</h1>
                                <p className='z-10 pt-5 text-sm md:text-md lg:text-lg hover:text-red-600 cursor-pointer font-semibold'>Superior market intelligence and knowledgeable insight,
                                providing you the opportunity to find the right aircraft at the right time that best meets your missions,
                                needs and budget.
                                </p>  
                                <a href='#' className='z-10 mt-2 text-red-600'>Learn more</a>
                            
                            </div>
                        </div>
                    </div>

                    <div className='pt-10 lg:pt-0 w-full'>

                        <div className=' lg:ml-[10%] text-white '>
                            <div className='lg:w-70 pt-10 relative' style={backimg2}> 
                              <div  className='bg-black absolute w-full h-full opacity-60'></div>
                                <h1 className='z-10 font-bold text-2xl'>HondaJet Consulting</h1>
                                <p className='pt-5 z-10 text-sm md:text-md lg:text-lg font-semibold hover:text-red-600 cursor-pointer'>Experienced knowledge and value added resources,
                                offering you advise on everything from what your aircraft is worth to the right next aircraft
                                that best meets your missions.
                                </p>
                                <a href='#' className='z-10 text-red-600 mt-2'>Learn more</a>
                            </div>
                        </div>
                        
                    </div>

                    <div className='pt-10 lg:pt-0 w-full'>

                        <div className=' lg:ml-[10%] text-white '>
                            <div className='lg:w-70 pt-10 relative' style={backimg3}>
                              <div  className='bg-black absolute w-full h-full opacity-60'></div>
                                <h1 className='z-10 font-bold text-2xl'>HondaJet Brokerage</h1>
                                <p className='z-10 pt-5 text-sm md:text-md  hover:text-red-600 lg:text-lg font-semibold cursor-pointer'>Expert market knowledge and unparalleled negotiation capabilities,
                                allowing you to sell your aircraft for the maximum possible value in the shortest period of
                                time.
                                </p>
                                <a href='#' className='z-10 text-red-600 mt-2'>Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Information;
