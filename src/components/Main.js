import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Contact from './Contact'
import styled from 'styled-components'

const Main = () => {
  return (
    <MainContainer>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  min-height: calc(100vh - 120px);
  padding: 20px 100px;

  @media (max-width: 1100px) {
    padding: 20px 50px;
  }
  @media (max-width: 700px) {
    padding: 20px;
  }
`

export default Main
