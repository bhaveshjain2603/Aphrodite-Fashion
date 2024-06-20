import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-section flex items-center justify-between w-full'>
        <h1 className='text-white text-2xl font-semibold'>Aphrodite Fashion</h1>
        <nav className='nav-bar'>
            <ul className='nav-menu flex gap-8 text-white text-lg'>
                <li className='nav-item'><a href="#" className='nav-link opacity-80 hover:opacity-100'>Home</a></li>
                <li className='nav-item'><a href="#about" className='nav-link opacity-80 hover:opacity-100'>About Us</a></li>
                <li className='nav-item'><a href="" className='nav-link opacity-80 hover:opacity-100'>Categories</a></li>
                <li className='nav-item'><a href="" className='nav-link opacity-80 hover:opacity-100'>Testimonials</a></li>
                <li className='nav-item'><a href="" className='nav-link opacity-80 hover:opacity-100'>Contact</a></li>
            </ul>
        </nav>
        <button className='login-signup border-2 border-yellow-400 rounded-3xl px-10 py-3 text-yellow-400 text-sm font-semibold'>Login/Signup</button>
    </div>
  )
}

export default Navbar