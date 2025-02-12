import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
const BestSeller = () => {

const {products} = useContext(ShopContext);
const [bestSeller, setBestSeller] = useState([]);

useEffect(() => {

    const bestProduct = products.filter((item) =>(item.bestseller));
    setBestSeller(bestProduct.slice(0,5));
},[])
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'HOT'} text2={'ITEMS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, ex? Unde sequi asperiores sint voluptatem, assumenda inventore voluptas hic eos, optio veniam quas, blanditiis facere rerum vitae voluptatum odit accusamus.
        </p>
      </div>
    </div>
  )
}

export default BestSeller