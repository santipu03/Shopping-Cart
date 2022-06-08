import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function ShopItem (props) {
  return (
    <ItemContainer>
      <img src={props.img}></img>
      <div className="itemTitle">{props.title}</div>
      <div className="price">{props.price}</div>
      <button onClick={() => props.onAddToCart(props.id)}>Add To Cart</button>
    </ItemContainer>
  )
}

ShopItem.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  img: PropTypes.node,
  id: PropTypes.string.isRequired
}

const ItemContainer = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.bgItemContainer};
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  max-width: 300px;

  & img {
    width: 250px;
    height: 250px;
    object-fit: cover;

    @media (max-width: 800px) {
      width: 200px;
      height: 200px;
    }
  }
  & button {
    height: 40px;
    width: 90%;
    font: inherit;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.black};

    &:hover {
      background-color: ${({ theme }) => theme.colors.bgButtonHover};
    }

    &:active {
      border: 2px solid ${({ theme }) => theme.colors.black};
    }
  }
  & .price {
    font-weight: bold;
  }
`

export default ShopItem
