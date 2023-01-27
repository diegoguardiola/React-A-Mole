import './App.css';
import { useState } from 'react';
import MoleContainer from './components/MoleContainer';

function App() {
  
  let [score, setScore] = useState(0)
  const createPosition= ()=>{
    let hill = []
    for (let i=0; i<11; i++){
      hill.push(<MoleContainer key={i} score={score} setScore={setScore}/>)
    }
    return(
      <div>
        {hill}
      </div>
    )

  }
  return (
  <>
  {}
    {score}
    {}
    {createPosition()}
  </>
  );
}

export default App;