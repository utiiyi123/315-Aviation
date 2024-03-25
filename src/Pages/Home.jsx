import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Information } from '../Components/Information/Information'
import { Global } from '../Components/Global/Global'
import { News } from '../Components/News/News'
import { PlaneInfo } from '../Components/PlaneInfo/PlaneInfo'
import { ContactInfo } from '../Components/ContactInfo/ContactInfo'

export const Home = () => {
  return (
    <div>
    <Hero/>
    <Information/>
    <Global/>
    <PlaneInfo/>
    <News/>
    <ContactInfo/>
    </div>
  )
}
