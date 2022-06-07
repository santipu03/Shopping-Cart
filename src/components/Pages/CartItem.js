import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function CartItem (props) {
  return (
    <ItemContainer>
      <img src={props.img}></img>
      <InfoContainer>
        <div className='title'>{props.title}</div>
        <div className='price'>{props.price}</div>
        <QuantityContainer>
          <FontAwesomeIcon icon={faMinus} className='icon'/>
          <input
            type={'text'}
            onChange={(e) => props.onChangeQuantity(e, props.id) }
            value={props.quantity}>
          </input>
          <FontAwesomeIcon icon={faPlus} className='icon'/>
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
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

const ItemContainer = styled.div`
  padding: 10px;
  display: flex;
  gap: 30px;

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
  align-items: center;
  justify-content: center;

  & .title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  & input {
    width: 40px;
    height: 30px;
    outline: none;
    border: 1px solid #888;
    text-align: center;
    font: inherit;
  }
`

const QuantityContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  &  .icon{
    cursor: pointer;
  }
`
