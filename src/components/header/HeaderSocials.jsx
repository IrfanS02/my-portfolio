import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { BsGithub } from "react-icons/bs";


const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href = "https://www.linkedin.com/in/mohamed-jamal-irfan-821159296/" target='_blank'><AiFillLinkedin /></a>
        <a href = "https://leetcode.com/u/itz_irfan_coder/" target='_blank'><SiLeetcode /></a>
        <a href = "https://github.com/IrfanS02" target='_blank'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials