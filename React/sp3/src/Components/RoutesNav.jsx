import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'

const RoutesNav= () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      
    </Routes>
  )
}

export default RoutesNav
