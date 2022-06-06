import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import styled from 'styled-components'
import BackgroundImage from './assets/background.jpg'

function App () {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Main />
        <Footer />
      </AppContainer>
    </BrowserRouter>
  )
}

const AppContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover; 
  background-position: right; 
  background-repeat: no-repeat; 
  background-attachment: fixed;
`

export default App
