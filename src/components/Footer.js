import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      Made by santipu_
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  height: 40px;
  /* background-color: rgba(100,100,100,0.3); */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #fff;
  font-weight: bold;
`
export default Footer
