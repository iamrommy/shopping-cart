import React from 'react'
import {toast} from 'react-hot-toast';
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux';
import {remove} from '../redux/slices/CartSlice'

//This component is for showing a product on cart page
export default function CartItem({item, itemIndex}) {

  const dispatch = useDispatch();
  const cart = useSelector((state)=> state.cart);

  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className={`max-w-xl ${(cart.length - 1 !== itemIndex)  && "border-black  border-b-2"} py-8 mx-4 sm:mx-0`}>
      <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
      <img
            className="w-[180px] mb-5"
            src={item.image}
            alt="cart-img"
          />   
    
        <div className='ml-12 space-y-5 mr-5'>
          <h1 className='text-gray-700 font-bold text-xl text-left'>{item.title}</h1>
          <h1 className='text-gray-600 font-medium text-[16px] text-left'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className='w-full flex justify-between'>
            <p className='text-green-600 font-bold text-xl'>${item.price}</p>
            <div onClick={removeFromCart} className="mr-4 text-xl p-2 bg-red-400 hover:border-2 hover:border-red-500 hover:bg-white transition duration-300 ease-in rounded-full">
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
//     <div className='h-[220px] min-w-fit max-w-[166px]'>
    //       <img className='h-full w-full' src={item.image} alt="Error loading img" />
    //     </div>