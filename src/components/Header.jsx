import React from 'react'
import logo from '../img/logo.svg'
import gh from '../img/github.png' 

export default function Header() {
 return (
  <div className="header">
   <img src={logo} width="80px" alt="artvard" />
   <a href="http://github.com/seanbfield"><img src={gh} width="80px" alt="github" /></a>
   
  </div>
 )
}
