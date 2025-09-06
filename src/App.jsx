import React from 'react'
import Navbar from './component/Navbar'
import HomePage from './component/HomePage'
import Experince from './component/Experince'


const App = () => {
  return (
    <>

      <Navbar/>
      <div className="containter">
        <HomePage/>
        <Experince/>
      </div>
      
    </>
  )
}

export default App
