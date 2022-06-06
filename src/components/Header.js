import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <Link to='/'>Rick And Morty</Link>
      <div>
        <Link to='/'>Home</Link>
        <Link to='shop'>Shop</Link>
        <Link to='contact'>Contact</Link>
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.nav`
  height: 80px;
  background-color: rgba(255,255,255,0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 200px;
  font-size: 1.3rem;
  font-weight: bold;

  & > div {
    display: flex;
    gap: 90px;
  }
`

// const TitleContainer = styled.div`
//   /* @font-face {
//     font-family: 'rickAndMorty';
//     src: url(../Assets/get_schwifty.ttf);
//   }
//   font-family: 'rickAndMorty'; */
// `

export default Header
