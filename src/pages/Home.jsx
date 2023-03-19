import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Food from '../components/Food'
import HeadlineCard from '../components/HeadlineCard'
import Hero from '../components/Hero'
import { fetchProducts } from '../store/actions/actions'


const Home = () => {


  const dispatch = useDispatch()
  useEffect(()=>{
  
    dispatch(fetchProducts())
  
  },[])
  return (
    <>
        <Hero />
        <HeadlineCard />
        <Food />
    </>
  )
}

export default Home