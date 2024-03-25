import React from 'react'
import plane1 from '../Images/N903JT-91.jpg'
import plane2 from '../Images/N903JT-99.jpg'

export const AboutInfo = () => {
  return (
    <div className='pt-40 px-10 lg:px-20'>
        <div>
            <h1 className='text-5xl text-indigo-300 font-bold'>Global Elite Aviation</h1>
            <hr className='justify-center mt-4 border-t-4 border-indigo-400'/>

            <div className='lg:flex pt-10 justify-between lg:px-10'>
                <div className='lg:w-[50%]'>
                    <img src={plane1} alt=''/>
                </div>
                <div className='pt-20 lg:pt-0 lg:w-[45%]'>
                    <p>Global Elite Aviation was founded in 2020 by Michelle Hoover.  Specializing uniquely in all 
                       models of the HondaJet, Global Elite Aviation offers comprehensive and strategic aircraft 
                       brokerage, acquisition and consulting services.  Whether it is finding the right buyer and 
                       negotiating the sale of your aircraft, facilitating the purchase of a new or pre-owned aircraft,
                       or providing comprehensive market intelligence and educated consulting services, Global Elite 
                       Aviation understands the importance of customizing the entire process to meet your specific needs, 
                       missions and budget.  Founded upon the philosophy of providing our customers with strategic 
                       value, genuine passion and uncompromising integrity, Global Elite Aviation is committed to 
                       being your dedicated business partner not just during the process of selling or purchasing a 
                       HondaJet, but throughout the entire duration of your HondaJet ownership experience. 
                    </p>
                </div>
            </div>

            <div className='lg:flex pt-20 justify-between lg:px-10'>
                <div className='pt-20 lg:pt-0 lg:w-[45%]'>
                    <p>Michelle Hoover is a highly driven and deeply passionate aircraft sales professional 
                      with multifaceted sales experience in both the light and midsize jet as well as turboprop markets,
                      specializing in all models of the HondaJet aircraft.  Michelle’s pathway into aircraft sales 
                      was inspired by a genuine passion for aviation and airplanes, that has flourished into a 
                      successful career and proven track record of aircraft sales.  During her time selling the 
                      HondaJet for HondaJet Southwest, Michelle was awarded with the coveted #1 Salesperson of the 
                      Year Award from Honda Aircraft Company for highest sales achievement by a Sales Manager.  
                      Michelle is currently one of the most experienced and sophisticated sales professionals in 
                      the world for the HondaJet, and is vastly knowledgeable in all models of the HondaJet aircraft.  


                     Prior to embarking on her career in aviation, Michelle held a highly successful sales career in 
                     the luxury wine industry working in sales and sales management roles for some of the most elite 
                     and respected wineries in the world.  Michelle is a Court of Master Sommeliers Level II Certified 
                     Sommelier and holds a Level III Advanced Certification from the Wine & Spirit Education Trust.


                     Michelle is passionate about all things aviation, wine, travel, learning and adventure, and most 
                     of all developing rewarding and long lasting business relationships with her customers. 
                    </p>
                </div>
                <div className='pt-20 lg:pt-0 lg:w-[50%]'>
                    <img src={plane2} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}
