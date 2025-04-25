import React from 'react'
import './footer.css'
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'> IrfanOfficial™</a>

      <ul className="premalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/IrfanS02" target='_blank'  rel="noreferrer"> <FaSquareGithub /></a>
        <a href="https://www.instagram.com/_i.rfxnn.__/" target='_blank'  rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/mohamed-jamal-irfan-821159296/" target='_blank'  rel="noreferrer"><FaLinkedinIn /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; IrfanCreates/VisionByIrfan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer