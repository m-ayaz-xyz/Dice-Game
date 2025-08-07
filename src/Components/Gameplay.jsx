import Totalscore from "./Totalscore";
import Numberselector from "./Numberselector";
import styled from "styled-components";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button, Outlinebtn } from "./styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setscore] = useState(0);
  const [selectedno, setselectedno] = useState();
  const [currentdice, setcurrentdice] = useState(1);
  const [error, seterror] = useState("");
  const [showrule, setshowrule] = useState(false)

  const randomno = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roledice = () => {
    if (!selectedno) {
      seterror("You have not selected any Number");
      return;
    }

    const randomnum = randomno(1, 7);
    setcurrentdice((prev) => randomnum);

    if (selectedno == randomnum) {
      setscore((prev) => prev + randomnum);
    } else {
      setscore((prev) => prev - 2);
    }
    setselectedno(undefined);
  };

  const resetScore = () => {
      setscore(0);
    };

  return (
    <Topcontent>
      <div className="top_section">
        <Totalscore score={score} />
        <Numberselector
          seterror={seterror}
          error={error}
          selectedno={selectedno}
          setselectedno={setselectedno}
        />
      </div>
      <Rolldice currentdice={currentdice} roledice={roledice} />
      <div className="btns">
        <Outlinebtn onClick={resetScore}>Reset Score</Outlinebtn>
        <Button onClick={()=> setshowrule((prev)=>!prev)}>{showrule ? "Hide": "Show"} Rule</Button>
      </div>
      {showrule && <Rules/>}
    </Topcontent>
  );
};

export default Gameplay;

const Topcontent = styled.main`
  margin: 0 30px 0 30px;
  padding-top: 60px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-top: 40px;
  }
`;
