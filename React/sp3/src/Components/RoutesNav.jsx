import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import PageNotFound from '../Pages/PageNotFound'
import SingleUser from '../Pages/SingleUser'
import Users from '../Pages/Users'

const RoutesNav= () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<SingleUser/>}/>
        <Route path='*' element={<PageNotFound/>} />
      
    </Routes>
  )
}

export default RoutesNav
