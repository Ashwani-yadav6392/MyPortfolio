import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'
import Aos from 'aos'
import "aos/dist/aos.css"


const App = () => {
  useEffect(()=>{
   Aos.init(); 
  },[])
  return (
    <>
    <Navbar/>
     <Outlet/>
    </>
  )
}

export default App
