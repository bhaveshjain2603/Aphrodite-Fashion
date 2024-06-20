import React from 'react'
import p13 from '../assets/clothes/product_13.png'

const About = () => {
  return (
    <>
      <section className='about-section px-8' id='about'>
        <div className='about-info flex items-center justify-center text-center pt-[2rem]'>
          <h1 className='text-4xl text-center font-bold w-6/12'>Discover Our High-Quality Fabrics and Trendy Designs</h1>
        </div>
        <div className='about-picture grid md:grid-cols-2 lg:grid-cols-3 p-8'>
          <div className="about-info flex flex-col w-full px-8 py-4 gap-4">
            <img 
              src={p13} 
              alt=""
              className='rounded'
            />
            <h1 className='text-center px-8 py-4 font-bold text-xl w-full'>Shop with Confidence for Affordable Prices</h1>
            <p className='text-center'>At Aphrodite Fashion, we pride ourselves on offering high-quality fabrics, trendy designs, and affordable prices.</p>
            <button className='button border py-4 w-6/12 self-center rounded-3xl hover:text-black hover:bg-white hover:font-semibold'>Learn More</button>
          </div>
          <div className="about-info flex flex-col w-full px-8 py-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="" 
              className='rounded'
            />
            <h1 className='text-center px-8 py-4 font-bold text-xl w-full'>Stay Fashionable with Our Latest Collection</h1>
            <p className='text-center'>Explore our wide range of apparel options and find the perfect style for any occasion.</p>
            <button className='button border py-4 w-6/12 self-center rounded-3xl hover:text-black hover:bg-white hover:font-semibold'>Shop Now</button>
          </div>
          <div className="about-info flex flex-col w-full px-8 py-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt=""
              className='rounded'
            />
            <h1 className='text-center px-8 py-4 font-bold text-xl w-full'>Customize Your Own Unique Apparel</h1>
            <p className='text-center'>Use our 3D customization tool to create personalized apparel that reflects your individual style.</p>
            <button className='button border py-4 w-6/12 self-center rounded-3xl hover:text-black hover:bg-white hover:font-semibold'>Start Creating</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About