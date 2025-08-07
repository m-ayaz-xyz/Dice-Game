import { useState } from 'react'
import Landingpg from './Components/Landingpg'
import Gameplay from './Components/Gameplay';


function App() {
  const [isgamestarted, setisgamestarted] = useState(false);

  const togglegame = () => {
    setisgamestarted((prev) => !prev);
  };

  return (
    <>
    {isgamestarted ? <Gameplay/> : <Landingpg toggle={togglegame}/>}
    </>
  )
}

export default App
