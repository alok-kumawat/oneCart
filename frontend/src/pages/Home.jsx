import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import Hero from '../components/Hero'
import Product from './Product'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {

  let heroData = [
    {text1:"30% OFF Limited Time Offer",text2:"Style that"},
    {text1:"Discover the Best of Bold Fashion ",text2:"Limited Time Only!"},
    {text1:"Explore Our Best Collection",text2:"Shop Now!"},
    {text1:"Choose your Perfect Fashion Fit",text2:"Now on Sale!"},
  ]

  let [heroCount, setHeroCount] = useState(0)

  useEffect(()=>{

    let interval = setInterval(()=>{
      setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1))
    },3000)
    return ()=> clearInterval(interval)

  },[])

  return (
    <div className='overflow-x-hidden relative top-[70px]'>
      <div className='w-[100vw] lg:h-[100vh] md:h-[60vh] sm:h-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex'>
        <div className='w-1/2 h-full flex items-center justify-center'>
          <Hero heroCount={heroCount}
            setHeroCount={setHeroCount}
            heroData={heroData[heroCount]}
            />
        </div>
        <div className='w-1/2 h-full'>
          <Background heroCount={heroCount}/>
        </div>
      </div>
      <Product />
      <OurPolicy />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home