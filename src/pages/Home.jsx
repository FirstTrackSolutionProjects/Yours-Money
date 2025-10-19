import React from 'react'

import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import AboutSection from '../components/AboutSection'
import FeaturesSection from '../components/FeaturesSection'
import Testimonial from '../components/Testimonial'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <section id="services">
          <ServiceCard />
      </section>
    
      <FeaturesSection />
      <AboutSection />
      <Testimonial />
      <CTASection />
      <Newsletter />
    </div>
  )
}


export default Home