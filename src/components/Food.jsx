import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {data} from '../data/data.js'
import axios from 'axios'
import { productActions } from '../store/store.js'
import { fetchProducts,Filter } from '../store/actions/actions.js'


const Food = () => {

    const products = useSelector(state=> state.product.products)
    const dispatch = useDispatch()




    const [food,setFood] = useState(products && products)
    const [cate,setCate] = useState('')

    const filterType=(cate)=>{
        setFood(products?.meals?.filter(item=>item.strCategory === cate))
        console.log(products)
    }


    const filterPrice=(price)=>{
        setFood(data.filter(item=>item.price === price))
    }
    const filD=(cate)=>{
        dispatch(Filter(cate))

    }
    const fetchCate=async()=>{
        const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')

        setCate(data)
    }

    // console.log(food)

    useEffect(()=>{
        fetchCate()
    },[dispatch,products])





  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12 ml-6 md:ml-0'>
        <h1 className='text-yellow-600 font-light text-center text-4xl'>Top Menu Items</h1>


        {/* Filter row */}
        <div className='flex flex-col lg:flex-row justify-center'>

            {/* filter type */}
            <div >
                <p className='font-bold text-gray-700'>FIlter Type</p>
                <div className='flex justify-between flex-wrap'>
                {cate?.categories?.map((f,i)=>(
                    <button key={i} onClick={()=> filD(f.strCategory)} className='rounded-full hover:bg-green-500 text-green-600 border-green-400 mr-3 mb-4 md:mb-0'>{f.strCategory}</button>

                ))}
                </div>
            </div>

                {/* filter price */}


        </div>

    {/* display food */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10' >
        {products?.meals?.map((f,i) => (
            <div key={i} className='shadow-xl border hover:scale-110 duration-300 rounded-t-xl' >
                <img src={f.strMealThumb} alt={f.strMeal} className='w-full object-cover h-[200px] rounded-t-xl' />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{f.strMeal}</p>
                    <p><span className='bg-cyan-500 font-light rounded-xl text-white p-2'>{f.idMeal}</span></p>
                </div>
            </div>
        ))}


        </div>

    </div>
  )
}

export default Food