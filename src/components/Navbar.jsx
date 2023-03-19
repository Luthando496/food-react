import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch,AiOutlineClose, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSave2Fill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends,FaWallet} from 'react-icons/fa'
import {MdFavorite,MdHelp,MdFoodBank} from 'react-icons/md'



const Navbar = () => {

    const [nav ,setNav]= useState(false)

    return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left */}
    <div className='flex items-center'>
        <div className='cursor-pointer' onClick={()=>setNav(!nav)}>
            <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:4xl px-2'>Best <span className='font-bold'>Foods</span></h1>

        <div className='hidden lg:flex items-center bg-pink-300 rounded-full p-1 text-[14px]'>
            <p className='bg-black rounded-full text-white p-2'>Food</p>
            <p className='p-2'>Lover</p>
        </div>
    </div>

    {/* search input */}
    {/* <div className='bg-gray-200 rounded-full px-2 w-[200px] flex items-center sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={30} />
        <input type="text" placeholder='search tasty food' className='bg-transparent p-2 focus:outline-none w-full' />
    </div> */}

    {/* cart */}

    <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full' >
        <MdFoodBank size={30} className='mr-2' />Foodie
    </button>

    {/* Mobile menu */}

    {/* overlay */}
    {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
    </div> : ''}

    {/* side draw */}
    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen z-10 bg-white duration-700 ease-in-out':'fixed top-0 left-[-100%] w-[300px] h-screen z-10 bg-white duration-700 ease-in-out' }>
        <AiOutlineClose size={30} className='absolute right-4 top-3 cursor-pointer' onClick={()=>setNav(!nav)} />
        <h2 className='text-2xl p-2'>Best <span className='font-bold'>Foods</span></h2>

    <nav>
        <ul className='mx-4 flex flex-col p-3 text-pink-300'>
            <li className='text-xl hover:text-yellow-500 cursor-pointer py-4 flex items-center uppercase'><TbTruckDelivery size={40} className='mr-5' /> Orders</li>
            <li className='text-xl hover:text-orange-500 cursor-pointer py-4 flex items-center uppercase'><MdFavorite size={40} className='mr-5' /> Favorites</li>
            <li className='text-xl hover:text-purple-500 cursor-pointer py-4 flex items-center uppercase'><FaWallet size={40} className='mr-5' /> Wallet</li>
            <li className='text-xl hover:text-green-700 cursor-pointer py-4 flex items-center uppercase'><MdHelp size={40} className='mr-5' /> Help</li>
            <li className='text-xl hover:text-black cursor-pointer py-4 flex items-center uppercase'><AiFillTag size={40} className='mr-5' /> Promotion</li>
            <li className='text-xl hover:text-blue-500 cursor-pointer py-4 flex items-center uppercase'><BsFillSave2Fill size={40} className='mr-5' /> Best Ones</li>
            <li className='text-xl hover:text-red-500 cursor-pointer py-4 flex items-center uppercase'><FaUserFriends size={40} className='mr-5' /> Share</li>
        </ul>
    </nav>

    </div>
    
    </div>
  )
}

export default Navbar;