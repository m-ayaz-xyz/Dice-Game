import React, { useState } from 'react'
import styled from 'styled-components'

const Rolldice = ({currentdice,roledice}) => {
    

  return (
    <Dicecontainer>
        <div className='dice' onClick={roledice}>
            <img src={`dice_${currentdice}.png`} alt="Dice" />
        </div>
        <p>Click on Dice to Roll</p>
    </Dicecontainer>
  )
}

export default Rolldice

const Dicecontainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 48px;

p{
    font-size: 24px;
}
.dice{
    cursor: pointer;
}
`;