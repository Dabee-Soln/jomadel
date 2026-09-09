import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import ProductSection from '../components/ProductSection'
import Benefits from '../components/Benefits'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <ProductSection />
        <Benefits />
    </div>
  )
}

export default Home