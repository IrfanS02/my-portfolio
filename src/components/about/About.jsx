import React from 'react'
import './about.css'
import ME from '../../assets/IMG-20250424-WA0025.jpg'
import { BsAward } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const About = () => {
  return (
   <section id ='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src = {ME} alt ="About Image" />
        </div>
      </div>
      <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about_card'>
              <GrProjects className='about_icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
            
          </div>

          <p>
          Motivated MCA graduate with a strong interest in web development. Developed hands-on projects 
          including a QR Code Generator, Weather App, e-commerce website , and a Secure Online Voting System.
          Passionate about building real-time,user-friendly web applications and continuously
          improving technical skills. Looking for opportunities to 
          contribute to innovative projects in a collaborative team environment.
          </p>

          <a href ="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About