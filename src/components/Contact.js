import React from 'react'
import styled from 'styled-components'
import GithubLogo from '../assets/github.png'
import TwitterLogo from '../assets/twitter.png'
import TwitchLogo from '../assets/twitch.png'
import YoutubeLogo from '../assets/youtube.png'
import InstagramLogo from '../assets/instagram.png'

function Contact () {
  return (
    <ContactContainer>
      <div className='quote-section'>
        <div className='quote'>
          “Boom! Big reveal! I turned myself into a pickle!”
        </div>
        <div className='author'>
          - Rick Sanchez -
        </div>
      </div>
      <div className='logo-container'>
      <a href='https://github.com/santipu03' target='_blank' rel="noreferrer">
        <img src={GithubLogo}></img>
      </a>
      <a href='https://www.youtube.com/watch?v=NWMRx4G9zjo' target='_blank' rel="noreferrer">
        <img src={TwitterLogo}></img>
      </a>
      <a href='https://www.youtube.com/watch?v=Q8Oz-zwcsCk' target='_blank' rel="noreferrer">
        <img src={TwitchLogo}></img>
      </a>
      <a href='https://www.youtube.com/watch?v=d0NFdR08gFA' target='_blank' rel="noreferrer">
        <img src={YoutubeLogo}></img>
      </a>
      <a href='https://www.youtube.com/watch?v=YFEBVI1tmcE' target='_blank' rel="noreferrer">
        <img src={InstagramLogo}></img>
      </a>
      </div>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  background-color: rgba(255,255,255,0.8);
  padding: 30px;
  height: 420px;
  text-align: center;

  & .quote {
    font-style: italic;
    font-size: 1.2rem;
    margin-bottom: 20px;
    margin-top: 30px;
  }
  & .logo-container {
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  & img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
  }
`

export default Contact
