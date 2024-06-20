import React from 'react'
import hoodie_short from '../../assets/clothes/hoodie_short'
import HoodieItem from '../Item/ShirtItem'
import ExploreBtn from '../ExploreBtn/ExploreBtn'

const HoodieProducts = () => {
  return (
    <div className="products flex flex-col items-center gap-3 mt-10">
        <h1 className='text-black text-4xl font-semibold'>Hoodie</h1>
        <hr className='w-52 h-1 bg-yellow-200 rounded-xl'/>
        <div className="product-item flex mt-8 gap-8">
            {hoodie_short.map((item, i) => {
                return <HoodieItem 
                  key={i} 
                  id={item.id} 
                  name={item.name} 
                  image={item.image} 
                  new_price={item.new_price} 
                  old_price={item.old_price} 
                />
            })}
        </div>
        <ExploreBtn />
    </div>
  )
}

export default HoodieProducts;