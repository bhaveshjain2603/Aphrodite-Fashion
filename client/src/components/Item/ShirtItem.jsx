import React from 'react'
import AddToCart from '../AddToCart/AddToCart'

const ShirtItem = (props) => {
  return (
    <div className="item w-60 border-2 p-4 rounded-xl">
        <img src={props.image} alt=""/>
        <p className='item-description text-black my-2 text-center mt-4'>{props.name}</p>
        <div className="item-prices flex items-center justify-center gap-2 mt-4 text-center">
          <div className="new-price text-cyan-700 text-xl font-semibold">
              ₹{props.new_price}
          </div>
          <div className="old-price text-slate-500 text-xl font-medium line-through">
              ₹{props.old_price}
          </div>
        </div>
        <div className="add-to-cart flex items-center justify-center mt-4">
            <AddToCart />
        </div>
    </div>
  )
}

export default ShirtItem