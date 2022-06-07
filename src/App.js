import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import styled from 'styled-components'
import BackgroundImage from './assets/background.jpg'
import Cart from './components/Pages/Cart'

function App () {
  const [itemsInCart, setItemsInCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const handleCloseCart = () => setShowCart(false)
  const handleShowCart = () => setShowCart(true)

  const handleChangeQuantity = (e, id) => {
    setItemsInCart(prevState => {
      const newArray = prevState.map(item => {
        if (item.id === id) {
          return { ...item, quantity: e.target.value }
        }
        return item
      })
      return newArray
    })
  }

  const handleAddToCart = (item) => {
    setItemsInCart((prevState) => [
      ...prevState, {
        id: item.id,
        title: item.title,
        img: item.img,
        price: item.price,
        quantity: '1'
      }
    ])
  }

  return (
    <BrowserRouter>
      <AppContainer>
        <Header
          onCartClicked={handleShowCart}
        />
        <Main
          onAddToCart={handleAddToCart}
        />
        <Footer />
        <Cart
          isCartOpen={showCart}
          itemsInCart={itemsInCart}
          onCloseCart={handleCloseCart}
          onChangeQuantity={handleChangeQuantity}
        />
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
