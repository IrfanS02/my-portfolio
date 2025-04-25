import React from 'react'
import './nav.css'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { IoMdCodeWorking } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
    <a href='#' onClick={() => setActiveNav('#')} 
    className={activeNav === '#' ?'active' : ''}><IoHome /></a>
    <a href='#about' onClick={() => setActiveNav('#about')}
      className={activeNav === '#about' ?'active' : ''}><FaUser /></a>
    <a href='#experience' onClick={() => setActiveNav('#experience')} 
    className={activeNav === '#experience' ?'active' : ''}><FaBook /> </a>
    <a href='#project' onClick={() => setActiveNav('#project')} 
    className={activeNav === '#project' ?'active' : ''}><IoMdCodeWorking /></a>
    <a href='#contact' onClick={() => setActiveNav('#contact')} 
    className={activeNav === '#contact' ?'active' : ''}><SiGooglemessages /></a>
    </nav>
  )
}

export default Nav