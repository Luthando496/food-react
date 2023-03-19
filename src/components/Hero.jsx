import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-7xl font-light'>The <span className='text-yellow-500 font-bold'>Best</span> </h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-7xl font-light'>Fresh Food <span className='text-yellow-500 font-bold'>For You</span></h1>
            </div>
            {/*  */}
            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="background" className='w-full max-h-[500px] object-cover' />
        </div>
    </div>
  )
}

export default Hero