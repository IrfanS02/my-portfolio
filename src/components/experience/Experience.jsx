import React from 'react'
import './experience.css'
import { PiSealCheckFill } from "react-icons/pi";


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
         <div className="experience_frontend">
            <h3>Frontend Development</h3>
              <div className="experience_content">
                <article className="experience_details">
                   <PiSealCheckFill className='experience_details-icon' />
                   <div>
                   <h4>HTML</h4>
                   <small className='text-light'>Experienced</small>
                   </div>
                </article>
                <article className="experience_details">
                   <PiSealCheckFill className='experience_details-icon' />
                   <div>
                   <h4>CSS</h4>
                   <small className='text-light'>Intermediate</small>
                   </div>
                </article>
                <article className="experience_details">
                   <PiSealCheckFill className='experience_details-icon' />
                  <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                   <PiSealCheckFill className='experience_details-icon' />
                  <div>
                  <h4>React.js</h4>
                  <small className='text-light'>Beginner</small>
                  </div>
                </article>
                <article className="experience_details">
                   <PiSealCheckFill className='experience_details-icon' />
                   <div>
                   <h4>Bootstrap</h4>
                   <small className='text-light'>Beginner</small>
                   </div>
                </article>
              </div>
         </div>
         
         <div className="experience_backend">
            <h3>Backend Development</h3>
                <div className="experience_content">
                <article className="experience_details">
                   <PiSealCheckFill className='experience_details-icon'  />
                   <div>
                   <h4>Java</h4>
                   <small className='text-light'>Intermediate</small>
                   </div>
                </article>
                <article className="experience_details">
                   <PiSealCheckFill className='experience_details-icon' />
                  <div>
                  <h4>Node.js</h4>
                  <small className='text-light'>Beginner</small>
                  </div>
                </article>
                <article className="experience_details">
                   <PiSealCheckFill className='experience_details-icon' />
                   <div>
                   <h4>MySQL</h4>
                   <small className='text-light'>Intermediate</small>
                   </div>
                </article>
                <article className="experience_details">
                   <PiSealCheckFill className='experience_details-icon' />
                   <div>
                   <h4>MongoDB</h4>
                   <small className='text-light'>Beginner</small>
                   </div>
                </article>
              </div>
         </div>
      </div>
    </section>
  )
}

export default Experience