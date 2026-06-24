import React from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Hero from './components/common/homecomponents/Hero'
import WhyParents from './components/common/homecomponents/WhyParents'
import TeachingMethod from './components/common/homecomponents/TeachingMethod'
import ApplySpot from './components/common/homecomponents/ApplySpot'
import FourLevels from './components/common/homecomponents/FourLevels'
import Testimonials from './components/common/homecomponents/Testimonials'

const page = () => {
  return (
    <div>
      
      <Hero />
      <WhyParents />
      <FourLevels />
      <TeachingMethod />
      <Testimonials />
      <ApplySpot />
    
      <Footer />
     
     
      
    </div>
  )
}

export default page