import React, { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
  let [displayMoleHole, setMoleHole] = useState(false)
  //Function need to handle the score
  const scoreCount = ()=>{
    props.setScore(props.score+1)
    setMoleHole(false)
  }
  let displayMole = displayMoleHole ? <Mole setScore={props.setScore} toggle={setMoleHole} scoreCount={scoreCount}/> : <EmptySlot toggle={setMoleHole}/>
    return(
        <div style={{'display': 'inline-block', 'width': '15vw', 'margin': '1em'}}>
          {}
          {displayMole}
        </div>
    )

}

export default MoleContainer