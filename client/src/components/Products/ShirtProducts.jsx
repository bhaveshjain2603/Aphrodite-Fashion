import React from 'react'
import men_short from '../../assets/clothes/men_short'
import ShirtItem from '../Item/ShirtItem'
import ExploreBtn from '../ExploreBtn/ExploreBtn'

const ShirtProducts = () => {
  return (
    <div className="products flex flex-col items-center gap-3 ">
        <h1 className='text-black text-4xl font-semibold'>Shirt</h1>
        <hr className='w-52 h-1 bg-yellow-200 rounded-xl'/>
        <div className="product-item flex mt-8 gap-8">
            {men_short.map((item, i) => {
                return <ShirtItem 
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

export default ShirtProducts