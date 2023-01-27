import React from 'react'
import { useEffect } from 'react'
import MoleImg from '../mole.png'

export default function Mole(props) {
  useEffect(()=>{
    let randSeconds = Math.ceil(Math.random()*2200)
    let timer = setTimeout(()=>{
      props.toggle(false)
    }, randSeconds)
    return ()=> clearTimeout(timer)
  })
  return (
    
    <div>
      <img src={MoleImg} onClick={props.scoreCount} />
    </div>
  )
}