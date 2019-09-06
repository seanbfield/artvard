import React from 'react'
import { useSpring, animated } from 'react-spring'

import logo from '../img/logo.svg'
import gh from '../img/github.png'

export default function Header() {
  const props = useSpring({ opacity: 2, from: { opacity: 0 } })
  return <animated.div style={props}>
    <div className="header">
      <img src={logo} width="80px" alt="artvard" />
      <form className="search-container">
        <input type="text" id="search-bar" placeholder="Browse the Harvard Art Museum Collection" />
        <p className="ctr-txt">Powered by the Harvard Art Museums API</p>
      </form>
      <a href="http://github.com/seanbfield"><img src={gh} width="80px" alt="github" /></a>
    </div>
  </animated.div >
}
