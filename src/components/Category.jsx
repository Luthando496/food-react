import React from 'react'
import { categories } from '../data/data'


const Category = () => {
  return (
    <div className='max-w-[1640px] max-auto px-4 py-12'>
        <h1>Top Menu Rated Items</h1>
        {/* Categories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 py-4'>
          {categories.map((ca,i) => (
            <div key={i} className='bg-slate-200 rounded-xl flex p-4 justify-between items-center'>
              <h2 className='text-red-500 text-2xl font-bold'>{ca.name}</h2>
              <img src={ca.image} alt={ca.name} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Category