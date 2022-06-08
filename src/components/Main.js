import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Main = (props) => {
  return (
    <MainContainer>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop onAddToCart={props.onAddToCart} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainContainer>
  )
}

Main.propTypes = {
  onAddToCart: PropTypes.func.isRequired
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
