import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
      setLatestProducts(products.slice(0,10))
    },[])
    
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'HOT'} text2={'ITEMS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, ex? Unde sequi asperiores sint voluptatem, assumenda inventore voluptas hic eos, optio veniam quas, blanditiis facere rerum vitae voluptatum odit accusamus.</p>
      </div>

      {/* Renderin Products */}
      <div>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          {latestProducts.map(product => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default LatestCollection