import React from 'react'
import { assets } from '../assets/assets'
import CountdownTimer from './Countdown'

const Hero = () => {
  return (
    <div className='px-3 py-5 bg-neutral-100 lg:py-10'>
      <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p class="text-4xl font-bold md:text-7xl text-[#A50000]">25% OFF</p>
            <p class="text-4xl font-bold md:text-7xl text-[#1D3557]">SUMMER SALE</p>
            <div className='flex justify-center py-3'>
              <div className=' px-8 py-5'>
                <div className="flex flex-col items-center justify-between">
                  <h3 className=" font-semibold text-[#1D3557]">FOR LIMITED TIME</h3>
                  <div className='font-semibold  text-[#1D3557]'>
                    <CountdownTimer />
                  </div>
                </div>
              </div>
            </div>
            <button class="bg-[#457B9D] text-white py-2 px-5 mt-2 hover:bg-[#1D3557]">Shop Now</button>
        </div>
        <div class="order-1 lg:order-2">
            <img className='h-80 w-80 object-cover lg:w-[400px] lg:h-[400px]' src={assets.hero_img} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Hero