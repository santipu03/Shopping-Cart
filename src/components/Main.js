import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Contact from './Contact'

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
  )
}

export default Main
