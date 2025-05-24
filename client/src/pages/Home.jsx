import React from 'react'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'

const Home = () => {
  return (
    <div className='mt-10'>
     <Hero/>
     <Categories/>
     <BestSeller/>
     <BottomBanner/>
    </div>
  )
}

export default Home