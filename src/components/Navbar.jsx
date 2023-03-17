import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left */}
    <div className='flex items-center'>
        <div className='cursor-pointer'>
            <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:4xl px-2'>Best <span className='font-bold'>Foods</span></h1>

        <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14px]'>
            <p className='bg-black rounded-full text-white p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
        </div>
    </div>

    {/* search input */}

    
    </div>
  )
}

export default Navbar;