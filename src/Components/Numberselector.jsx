import React, { useState } from "react";
import styled from "styled-components";

const Numberselector = ({seterror, error, selectedno, setselectedno}) => {
  const arraynum = [1, 2, 3, 4, 5, 6];
  
  const numselectorhandler = (value) => {
setselectedno(value)
seterror("")
  }

  return (
    <Numselector>
        <p className="error">{error}</p>
      <div className="flex">
        {arraynum.map((value, i) => (
          <Box
            isselected={value == selectedno}
            key={i}
            onClick={() => numselectorhandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Numselector>
  );
};

export default Numberselector;

const Numselector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .error{
    color: red;
  }
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;
