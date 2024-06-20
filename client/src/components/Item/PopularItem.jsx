import React from 'react'

const PopularItem = (props) => {
  return (
    <div className="item w-80 border-2 p-4 rounded-xl">
        <img src={props.image} alt="" />
        <p className='item-description text-black my-2'>{props.name}</p>
        <div className="item-prices flex gap-5">
          <div className="new-price text-cyan-700 text-xl font-semibold">
              {props.new_price}
          </div>
          <div className="old-price text-slate-500 text-xl font-medium line-through">
              {props.old_price}
          </div>
        </div>
    </div>
  )
}

export default PopularItem