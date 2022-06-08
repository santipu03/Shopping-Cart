import React from 'react'
import styled from 'styled-components'
import PickleRickImg from '../../assets/itemsImages/pickle.jpg'
import AbstractImg from '../../assets/itemsImages/abstract.jpg'
import BrainsImg from '../../assets/itemsImages/brains.jpg'
import ButtholeImg from '../../assets/itemsImages/butthole.jpg'
import DistortedImg from '../../assets/itemsImages/distortedrickandmorty.jpg'
import LittleRickImg from '../../assets/itemsImages/littlerick.jpg'
import MiddleFingerImg from '../../assets/itemsImages/middlefinger.jpg'
import MisixImg from '../../assets/itemsImages/misix.jpg'
import RickAndMortyImg from '../../assets/itemsImages/rickandmorty.jpg'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'
import ShopItem from './ShopItem'

function Shop (props) {
  const Items = [
    {
      id: uniqid(),
      title: 'Pickle Rick',
      price: '$15',
      img: PickleRickImg
    },
    {
      id: uniqid(),
      title: 'Abstract Rick',
      price: '$12',
      img: AbstractImg
    },
    {
      id: uniqid(),
      title: 'Melting Couple',
      price: '$18',
      img: BrainsImg
    },
    {
      id: uniqid(),
      title: 'Mr. Poopy Butthole',
      price: '$8',
      img: ButtholeImg
    },
    {
      id: uniqid(),
      title: 'DistortedFamily',
      price: '$15',
      img: DistortedImg
    },
    {
      id: uniqid(),
      title: 'Little Rick',
      price: '$14',
      img: LittleRickImg
    },
    {
      id: uniqid(),
      title: 'Middle Finger Rick',
      price: '$17',
      img: MiddleFingerImg
    },
    {
      id: uniqid(),
      title: 'Mr. Meeseeks',
      price: '$19',
      img: MisixImg
    },
    {
      id: uniqid(),
      title: 'Open Your Eyes',
      price: '$16',
      img: RickAndMortyImg
    }
  ]

  const handleClick = (id) => {
    const itemToCart = Items.find((item) => item.id === id)
    props.onAddToCart(itemToCart)
  }

  const itemsToDisplay = Items.map((item) => (
    <ShopItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      img={item.img}
      onAddToCart={handleClick}
    />
  ))

  return <ShopContainer>{itemsToDisplay}</ShopContainer>
}

Shop.propTypes = {
  onAddToCart: PropTypes.func.isRequired
}

const ShopContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.bgShopPage};
  backdrop-filter: blur(8px);
  min-height: 420px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  justify-items: center;

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  }
`

export default Shop
