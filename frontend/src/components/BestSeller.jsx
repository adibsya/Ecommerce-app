import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const BestSeller = () => {

const {products} = useContext(ShopContext);
const [bestSeller, setBestSeller] = useState([]);

useEffect(() => {})
  return (
    <div>BestSeller</div>
  )
}

export default BestSeller