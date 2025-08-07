import React from 'react'
import { FaCircle } from 'react-icons/fa'

const Hero = ({heroData, heroCount, setHeroCount}) => {
  return (
    <div className='w-[100%] h-[100%] relative'>
        <div className='absolute text-[#88d9ee] text-[20px] md:text-[40px] lg:text-[55px] md:left-[10%] md:top-[90px] lg:top-[130px] left-[10%] top-[10px]'>
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className='absolute md:top-[400px] lg:top-[500px] top-[160px] left-[10%] flex items-center justify-center gap-[10px]'>
            {[0, 1, 2, 3].map((i) => (
                <FaCircle
                    key={i}
                    className={`w-[14px] cursor-pointer ${
                        heroCount === i ? "fill-orange-400" : "fill-white"
                    }`}
                    onClick={() => setHeroCount(i)}
                />
            ))}
        </div>

    </div>
  )
}

export default Hero