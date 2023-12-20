import React from 'react'
import {Routes,Route} from "react-router-dom"
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import PageNotFound from '../Pages/PageNotFound'
import SingleUser from '../Pages/SingleUser'
import Users from '../Pages/Users'
import { PrivateRoute } from './PrivateRoute'

const RoutesNav= () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/users" element={<PrivateRoute><Users/></PrivateRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/users/:id" element={<PrivateRoute><SingleUser/></PrivateRoute>}/>
        <Route path='*' element={<PageNotFound/>} />
      
    </Routes>
  )
}

export default RoutesNav
