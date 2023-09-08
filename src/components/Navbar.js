import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.png'

export default function Navbar() {

  const cart = useSelector((state)=> state.cart);

  return (
    <nav className='bg-slate-900'>
      <div className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink to="/"> 
            <div className='ml-5 flex items-center'>
                <img src={Logo} width="30" alt="ECOMZY" />
                <h3 className='text-green-700 text-xl font-semibold ml-1 mb-2 underline'>ECOMZY</h3>
            </div> 
        </NavLink>
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
            <NavLink to="/">
                    <p>Home</p>
            </NavLink>
            <NavLink to="/Cart">
                <div className='relative'>
                    <FaShoppingCart className='text-2xl'/>
                    {
                      cart.length > 0 && 
                      <span
                      className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'
                      >{cart.length}</span>
                    }
                </div>
            </NavLink>
        </div>
      </div>
    </nav>

/* <nav className='bg-slate-900'>
<div className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
  <NavLink to="/"> 
      <div className='ml-5 flex items-center'>
          <img src={Logo} width="40" alt="ECOMZY" />
          <h3 className='text-green-700 text-xl font-semibold ml-1 mb-2 underline'>ECOMZY</h3>
      </div> 
  </NavLink>
  <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
      <NavLink to="/">
              <p>Home</p>
      </NavLink>
      <NavLink to="/Cart">
          <div className='relative'>
              <FaShoppingCart className='text-2xl'/>
              {
                cart.length > 0 && 
                <span
                className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'
                >{cart.length}</span>
              }
          </div>
      </NavLink>
  </div>
</div>
</nav> */
  )
}
