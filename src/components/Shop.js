import React from 'react'
import styled from 'styled-components'
import PickleRickImg from '../assets/items/pickle.jpg'
import AbstractImg from '../assets/items/abstract.jpg'
import BrainsImg from '../assets/items/brains.jpg'
import ButtholeImg from '../assets/items/butthole.jpg'
import DistortedImg from '../assets/items/distortedrickandmorty.jpg'
import LittleRickImg from '../assets/items/littlerick.jpg'
import MiddleFingerImg from '../assets/items/middlefinger.jpg'
import MisixImg from '../assets/items/misix.jpg'
import RickAndMortyImg from '../assets/items/rickandmorty.jpg'

function Shop () {
  return (
    <ShopContainer>
      <ItemContainer>
        <img src={PickleRickImg}></img>
        <div className='itemTitle'>Pickle Rick</div>
        <div className='price'>$15</div>
        <button>Add To Cart</button>
      </ItemContainer>
      <ItemContainer>
        <img src={AbstractImg}></img>
        <div className='itemTitle'>Abstract Rick</div>
        <div className='price'>$15</div>
        <button>Add To Cart</button>
      </ItemContainer>
      <ItemContainer>
        <img src={BrainsImg}></img>
        <div className='itemTitle'>Melting Couple</div>
        <div className='price'>$15</div>
        <button>Add To Cart</button>
      </ItemContainer>
      <ItemContainer>
        <img src={ButtholeImg}></img>
        <div className='itemTitle'>Mr. Poopy Butthole</div>
        <div className='price'>$15</div>
        <button>Add To Cart</button>
      </ItemContainer>
      <ItemContainer>
        <img src={DistortedImg}></img>
        <div className='itemTitle'>Pickle Rick</div>
        <div className='price'>$15</div>
        <button>Add To Cart</button>
      </ItemContainer>
      <ItemContainer>
        <img src={LittleRickImg}></img>
        <div className='itemTitle'>Distorted Family</div>
        <div className='price'>$15</div>
        <button>Add To Cart</button>
      </ItemContainer>
      <ItemContainer>
        <img src={MiddleFingerImg}></img>
        <div className='itemTitle'>Middle Finger Rick</div>
        <div className='price'>$15</div>
        <button>Add To Cart</button>
      </ItemContainer>
      <ItemContainer>
        <img src={MisixImg}></img>
        <div className='itemTitle'>Mr. Meeseeks</div>
        <div className='price'>$15</div>
        <button>Add To Cart</button>
      </ItemContainer>
      <ItemContainer>
        <img src={RickAndMortyImg}></img>
        <div className='itemTitle'>Open Your Eyes</div>
        <div className='price'>$15</div>
        <button>Add To Cart</button>
      </ItemContainer>
    </ShopContainer>
  )
}

const ShopContainer = styled.div`
  padding: 20px;
  background-color: rgba(255,255,255,0.8);
  min-height: 420px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`

const ItemContainer = styled.div`
  padding: 10px;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  max-width: 300px;

  & img {
    width: 250px;
    height: 250px;
    object-fit:cover;
  }
  & button {
    height: 40px;
    width: 90%;
    font: inherit;
    background-color: #fff;
    border: none;
    cursor: pointer;
    border: 1px solid #000;

    &:active {
      border: 2px solid #000;
      background-color: #eee;
    } 
  }
  & .price {
    font-weight: bold;
  }
`

export default Shop
