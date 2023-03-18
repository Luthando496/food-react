import React, { useState } from 'react'
import {data,categories} from '../data/data.js'


const Food = () => {


    const [food,setFood] = useState(data)

    const filterType=(cate)=>{
        setFood(data.filter(item=>item.category === cate))
    }


    const filterPrice=(price)=>{
        setFood(data.filter(item=>item.price === price))
    }


  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12 ml-6 md:ml-0'>
        <h1 className='text-yellow-600 font-light text-center text-4xl'>Top Menu Items</h1>


        {/* Filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>

            {/* filter type */}
            <div >
                <p className='font-bold text-gray-700'>FIlter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> setFood(data)} className='rounded-full hover:bg-green-500 text-green-600 border-green-400 mr-3 mb-4 md:mb-0'>All</button>
                    <button onClick={()=> filterType('burger')} className='rounded-full hover:bg-green-500 text-green-600 border-green-400 mr-3 mb-4 md:mb-0'>Burger</button>
                    <button onClick={()=> filterType('salad')} className='hover:bg-green-500 rounded-full text-green-600 border-green-400 mr-3 mb-4 md:mb-0'>salad</button>
                    <button onClick={()=> filterType('chicken')} className='hover:bg-green-500 rounded-full text-green-600 border-green-400 mr-3 mb-4 md:mb-0'>chicken</button>
                    <button onClick={()=> filterType('pizza')} className='hover:bg-green-500 rounded-full text-green-600 border-green-400 mr-3 mb-4 md:mb-0'>pizza</button>
                </div>
            </div>

                {/* filter price */}
        <div>
        <p className='font-bold text-gray-700'>Filter Price</p>
        <div className='flex justify-between flex-wrap max-w-[390px]'>
        <button onClick={()=> filterPrice('$')} className='hover:bg-blue-500 rounded-full text-blue-600 border-blue-400 mr-3 mb-4 md:mb-0'>$</button>
        <button onClick={()=> filterPrice('$$')} className='hover:bg-blue-500 rounded-full text-blue-600 border-blue-400 mr-3 mb-4 md:mb-0'>$$</button>
        <button onClick={()=> filterPrice('$$$')}  className='hover:bg-blue-500 rounded-full text-blue-600 border-blue-400 mr-3 mb-4 md:mb-0'>$$$</button>
        <button onClick={()=> filterPrice('$$$$')}  className='hover:bg-blue-500 rounded-full text-blue-600 border-blue-400 mr-3 mb-4 md:mb-0'>$$$$</button>
        </div>
        </div>


        </div>

    {/* display food */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10' >
        {food.map((f,i) => (
            <div key={i} className='shadow-xl border hover:scale-110 duration-300 rounded-t-xl' >
                <img src={f.image} alt={f.name} className='w-full object-cover h-[200px] rounded-t-xl' />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{f.name}</p>
                    <p><span className='bg-cyan-500 font-light rounded-xl text-white p-2'>{f.price}</span></p>
                </div>
            </div>
        ))}

        </div>

    </div>
  )
}

export default Food