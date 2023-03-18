import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-7xl font-light'>The <span className='text-yellow-500 font-bold'>Best</span> </h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-7xl font-light'>Brought To <span className='text-yellow-500 font-bold'>Best You</span></h1>
            </div>
            {/*  */}
            <img src="https://images.pexels.com/photos/745988/pexels-photo-745988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="background" className='w-full max-h-[500px] object-cover' />
        </div>
    </div>
  )
}

export default Hero