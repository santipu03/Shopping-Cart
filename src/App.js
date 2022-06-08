import React, { useEffect, useState } from 'react'
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
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0)

  const handleCloseCart = () => setShowCart(false)
  const handleShowCart = () => setShowCart(true)

  useEffect(() => {
    setNumOfItemsInCart(() => {
      let numOfItems = 0
      itemsInCart.forEach(item => {
        numOfItems += item.quantity
      })
      return numOfItems
    })
  })

  const handleChangeQuantity = (value, id) => {
    // First, change the quantity
    setItemsInCart(prevState => {
      const newArray = prevState.map(item => {
        if (item.id === id) {
          return { ...item, quantity: value }
        }
        return item
      })
      return newArray
    })
    // Second, delete any item that its quantity is 0 or less
    setItemsInCart((prevState) => {
      const newArray = prevState.filter(item => {
        return item.quantity > 0
      })
      return newArray
    })
  }

  const handleAddToCart = (item) => {
    let changedItem = false

    // First, if the product is already on cart, we add 1 to quantity
    setItemsInCart(prevState => {
      const newArray = prevState.map(itemAdded => {
        if (itemAdded.title === item.title) {
          changedItem = true
          return {
            ...itemAdded, quantity: itemAdded.quantity + 1
          }
        }
        return itemAdded
      })
      return newArray
    })

    // If we don't find the product in card, we add it
    setItemsInCart((prevState) => {
      if (!changedItem) {
        return [
          ...prevState, {
            id: item.id,
            title: item.title,
            img: item.img,
            price: item.price,
            quantity: 1
          }]
      }
      return prevState
    })
  }

  return (
    <BrowserRouter>
      <AppContainer>
        <Header
          onCartClicked={handleShowCart}
          numOfItemsInCart={numOfItemsInCart}
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
