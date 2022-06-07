import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <HeaderContainer>
      <Link to='/'>Rick And Morty</Link>
      <div>
        <Link to='/'>Home</Link>
        <Link to='shop'>Shop</Link>
        <Link to='contact'>Contact</Link>
        <IconContainer onClick={props.onCartClicked}>
          <FontAwesomeIcon icon={faCartShopping} size='lg' />
          <div>0</div>
        </IconContainer>
      </div>
    </HeaderContainer>
  )
}

Header.propTypes = {
  onCartClicked: PropTypes.func.isRequired
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
    align-items: center;
    gap: 90px;

    @media (max-width: 1100px) {
      gap: 50px;
    }
    @media (max-width: 510px) {
      gap: 20px;
    }
 
  }

  @media (max-width: 1100px) {
    padding: 0 150px;
  }
  @media (max-width: 900px) {
    padding: 0 100px;
  }
  @media (max-width: 750px) {
    padding: 0 50px;
  }
  @media (max-width: 650px) {
    padding: 0 20px;
    font-size: 1.1rem;
  }
  @media (max-width: 510px) {
    font-size: 1.1rem;
  }
`

const IconContainer = styled.div`
  cursor: pointer;
  position: relative;


  & div {
    height: 20px;
    width: 20px;
    position: absolute;
    background-color: #f87171;
    border-radius: 50%;
    top: -12px;
    right: -22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
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
