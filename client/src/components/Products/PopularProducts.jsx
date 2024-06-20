import React from 'react'
import data_product from '../../assets/clothes/data'
import PopularItem from '../Item/PopularItem'

const Products = () => {
  return (
    <div className="products flex flex-col items-center gap-3 ">
        <h1 className='text-black text-4xl font-semibold'>Popular</h1>
        <hr className='w-52 h-1 bg-slate-900 rounded-xl'/>
        <div className="product-item flex mt-12 gap-8">
            {data_product.map((item, i) => {
                return <PopularItem 
                  key={i} 
                  id={item.id} 
                  name={item.name} 
                  image={item.image} 
                  new_price={item.new_price} 
                  old_price={item.old_price} 
                />
            })}
        </div>
    </div>
  )
}

export default Products