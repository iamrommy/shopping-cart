import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';
import {empty} from '../redux/slices/CartSlice'

export default function Cart() {

  const cart = useSelector((state)=> state.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  const emptyCart = ()=>{
    dispatch(empty());
  }

  useEffect(()=>{
    setTotalAmount( cart.reduce ((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div className={`flex justify-center ${cart.length === 0 && "items-center"} max-w-6xl p-2 mx-auto min-h-[80vh] bg-none`}>
      {
        cart.length > 0 ?
        (<div className='flex xl:space-x-12 flex-col xl:flex-row items-center xl:items-start'>
          <div className='xl:order-1 order-2'>
            {
              cart.map((item, index)=>{
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>
          
          <div className='xl:h-[90vh] w-screen py-3 sm:py-8 xl:py-0 xl:my-8 flex flex-col sm:flex-row xl:flex-col sm:items-center xl:items-start justify-around xl:justify-between xl:max-w-xl xl:w-[20vw] sticky top-0 xl:top-20 xl:order-2 order-1 bg-white'>
            <div className='space-y-5 px-4 xl:px-0'>
              <div>
                <div className='uppercase text-lg font-bold text-green-600'>Your Cart</div>
                <div className='uppercase text-4xl font-bold text-green-600'>Summary</div>
              </div>
              <p className='text-lg'>
                <span className='font-semibold'>Total Items: </span> <span>{cart.length}</span>
              </p>
            </div>

            <div className='space-y-4 xl:w-full px-4 xl:px-0'>
              <p className='text-lg'>
              <span className='font-semibold'>Total Amount: </span> <span className='font-bold'>${totalAmount}</span>
              </p>
              <button className='text-white bg-green-600 border-2 border-green-600 rounded-md font-semibold text-[18px] py-2 px-10 hover:bg-white hover:text-green-600 transition duration-300 ease-in w-full uppercase' onClick={emptyCart}>
                Empty Cart 
                {/* Checkout Now */}
              </button>
            </div>
          </div>

        </div>) :
        (<div className='flex flex-col gap-y-4 justify-center items-center'>
          <h1 className='font-semibold text-2xl'>Cart is Empty</h1>
          <NavLink to="/">
            <button className='text-white bg-green-600 border-2 border-green-600 rounded-md font-semibold text-[18px] p-2 px-4 uppercase hover:bg-white hover:text-green-600 transition duration-300 ease-in'>
              Shop Now
            </button>
          </NavLink>
        </div>)
      }
    </div>
  )
}
