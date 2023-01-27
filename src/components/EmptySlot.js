import React, { useEffect } from 'react'
import moleHillImg from '../molehill.png'

export default function EmptySlot(props) {
  useEffect(()=>{
    let randSeconds = Math.ceil(Math.random()*2200)
    let timer = setTimeout(()=>{
      props.toggle(true)
    }, randSeconds)
    return()=> clearTimeout(timer)
  })
  return (
    <div>
      <img src={moleHillImg} />
    </div>
  )
}