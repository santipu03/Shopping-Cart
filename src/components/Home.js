import React from 'react'
import styled from 'styled-components'

function Home () {
  return (
    <HomeContainer>
      <h3>
        &quot;To live is to risk it all,
      </h3>
      <div className='quote'>
        otherwise you&apos;re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.&quot;
      </div>
      <div className='author'>Rick Sanchez</div>
      <button>Shop Now</button>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  font-size: 1.5rem;
  margin-top: 40px;
  letter-spacing: 1px;

  & h3 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 15px;
    font-style: italic;
  }
  & button {
    height: 60px;
    width: 130px;
    font: inherit;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 1px solid #000;
    background-color: rgba(255,255,255,0.7);
    margin-top: 20px;
    cursor: pointer;
  }
  & .quote {
    font-style: italic;
  }
  & .author {
    font-size: 1.2rem;
    margin-top: 10px;
  }
`

export default Home
