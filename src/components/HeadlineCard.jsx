import React from 'react'

const HeadlineCard = () => {
  return (
    <div className='w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* CARDS */}
        <div className='relative rounded-xl ml-5 md:ml-0'>
        {/* overlay */}
            <div className='absolute w-full h-full bg-black/70 rounded-xl text-white'>
                <p className='text-2xl px-2 pt-4 font-bold'>Lorem, ipsum dolor.</p>
                <p className='text-2xl px-2 pt-4'>Lorem, 8/27.</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] object-cover w-full' src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
        </div>
        <div className='relative rounded-xl ml-5 md:ml-0'>
        {/* overlay */}
            <div className='absolute w-full h-full bg-black/70 rounded-xl text-white'>
                <p className='text-2xl px-2 pt-4 font-bold'>Lorem, ipsum dolor.</p>
                <p className='text-2xl px-2 pt-4'>Lorem, 8/27.</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] object-cover w-full' src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
        </div>
        <div className='relative rounded-xl ml-5 md:ml-0'>
        {/* overlay */}
            <div className='absolute w-full h-full bg-black/70 rounded-xl text-white'>
                <p className='text-2xl px-2 pt-4 font-bold'>Lorem, ipsum dolor.</p>
                <p className='text-2xl px-2 pt-4'>Lorem, 8/27.</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] object-cover w-full' src="https://images.pexels.com/photos/2732663/pexels-photo-2732663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
        </div>
    </div>
  )
}





export default HeadlineCard;