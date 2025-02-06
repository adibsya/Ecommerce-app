import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[1px] bg-[#1D3557]'></p>
        <p className='text-[#A50000]'>{text1} <span className='text-black font-medium'> {text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[1px] bg-[#1D3557]'></p>
    </div>


  )
}

export default Title