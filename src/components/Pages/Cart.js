import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

export default function Cart (props) {
  const [totalCartPrice, setTotalCartPrice] = useState(0)

  useEffect(() => {
    setTotalCartPrice(() => (
      props.itemsInCart.reduce((prev, curr) => {
        return prev + parseInt(curr.price.substring(1)) * curr.quantity
      }, 0)
    ))
  })

  const itemsToDisplay = props.itemsInCart.map(item => (
    <CartItem
      key={item.id}
      id={item.id}
      img={item.img}
      title={item.title}
      price={item.price}
      quantity={item.quantity}
      onChangeQuantity={props.onChangeQuantity}
    />
  ))

  return (
    <CartOverlay isCartOpen={props.isCartOpen} onClick={props.onCloseCart}>
      <CartContainer onClick={e => e.stopPropagation()}>
        <CartTitle>Your Cart</CartTitle>
        <ItemsContainer>
          {itemsToDisplay}
        </ItemsContainer>
        <TotalContainer>Total: ${totalCartPrice}</TotalContainer>
        <ButtonContainer>
          <button className='submit'>Checkout</button>
          <button className='close' onClick={props.onCloseCart}>Close</button>
        </ButtonContainer>
      </CartContainer>
    </CartOverlay>
  )
}

Cart.propTypes = {
  isCartOpen: PropTypes.bool.isRequired,
  itemsInCart: PropTypes.array.isRequired,
  onCloseCart: PropTypes.func.isRequired,
  onChangeQuantity: PropTypes.func.isRequired
}

const CartOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.cartOverlay};
  visibility: ${props => props.isCartOpen ? 'visible' : 'hidden'};
  z-index: ${props => props.isCartOpen ? 10 : -10};
`

const CartContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 400px;
  background-color: white;
  right: 0;
  padding: 40px;
`

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 350px;
  overflow: auto;
`

const CartTitle = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
`

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  & button {
    height: 40px;
    width: 200px;
    border: 1px solid ${({ theme }) => theme.colors.black};
    font: inherit;
    cursor: pointer;

    &:active {
      border: 2px solid ${({ theme }) => theme.colors.black};
    }
  }
  & .submit {
    background-color: ${({ theme }) => theme.colors.greenButton};
  }
  & .close {
    background-color: ${({ theme }) => theme.colors.redButton};
  }
`
const TotalContainer = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 1.3rem;
  text-align: center
`
