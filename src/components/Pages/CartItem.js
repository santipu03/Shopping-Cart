import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function CartItem (props) {
  const totalPrice = `$${parseInt(props.price.substring(1)) * props.quantity}`

  return (
    <ItemContainer>
      <img src={props.img}></img>
      <InfoContainer>
        <div className="title">{props.title}</div>
        <div className="price">{totalPrice}</div>
        <QuantityContainer>
          <button
            onClick={() => props.onChangeQuantity(props.quantity - 1, props.id)}
          >
            <FontAwesomeIcon icon={faMinus} className="icon" />
          </button>
          <input type={'text'} value={props.quantity} readOnly></input>
          <button
            onClick={() => props.onChangeQuantity(props.quantity + 1, props.id)}
          >
            <FontAwesomeIcon icon={faPlus} className="icon" />
          </button>
        </QuantityContainer>
      </InfoContainer>
    </ItemContainer>
  )
}

CartItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.node.isRequired,
  onChangeQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
}

const ItemContainer = styled.div`
  padding: 10px;
  display: flex;
  gap: 30px;
  justify-content: stretch;

  & img {
    object-fit: cover;
    width: 120px;
    height: 120px;
  }
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 135px;
  align-items: center;
  justify-content: center;

  & .title {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
  }
  & input {
    width: 40px;
    height: 30px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.borderInput};
    text-align: center;
    font: inherit;
    cursor: auto;
  }
`

const QuantityContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & button {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.borderInput};
    border-radius: 5px;
    cursor: pointer;

    &:active {
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }
  }
`
