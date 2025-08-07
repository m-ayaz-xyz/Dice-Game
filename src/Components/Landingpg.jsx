import React from 'react'
import styled from 'styled-components'
import { Button } from './styled/Button'

const Landingpg = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="dices.png" alt="" />
        </div>
        <div className='heading'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Landingpg

const Container= styled.div`
max-width: 1182px;
height: 100vh;
display: flex;
margin: 0 auto;
align-items: center;
gap: 10px;

.heading h1{
    font-size: 96px;
    white-space: nowrap;
}
`;

