import React from 'react'
import { useSpring, animated } from 'react-spring'

import gh from '../img/github.png'
import logo from '../img/logo.svg'



export default function Header() {
  const props = useSpring({ opacity: 2, from: { opacity: 0 } })
  return <animated.div style={props}>
    <div className="header">
      <img src={logo} width="80px" alt="artvard" />
      <a href="https://github.com/seanbfield/artvard"><img src={gh} width="80px" alt="github" /></a>
    </div>
  </animated.div >
}
