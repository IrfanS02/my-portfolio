import React from 'react'
import './project.css'
import IMG1 from '../../assets/weather.png'
import IMG2 from '../../assets/qrcode.png'
import IMG3 from '../../assets/vote1.png'

const Project = () => {
  return (
   <section id="project">
    <h5> My Recent Work</h5>
    <h2> Projects </h2>

    <div className="container project_container">
     <article className='project_item'>
      <div className="project_item-image">
          <img src ={IMG1} alt="weather project" />
      </div>
        <h3>Live Weather App</h3>
       <div className="project_item-cta">
       <a href = "https://github.com/IrfanS02/Qr-Code-Generator_Using_React" 
        className='btn' target = "_blank">Github</a>
        <a href="https://weathervoicebyirfan.netlify.app/"
        className='btn btn-primary' target = "_blank">Live Demo</a>
       </div>
     </article>

     <article className='project_item'>
      <div className="project_item-image">
          <img src ={IMG2} alt="Qr-Code Generator" />
      </div>
        <h3>Qr-Code Generator</h3>
       <div className="project_item-cta">
       <a href = "https://github.com/IrfanS02/Qr-Code-Generator_Using_React" 
        className='btn' target = "_blank">Github</a>
        <a href="https://live-qr-codegenerator.netlify.app/"
        className='btn btn-primary' target = "_blank">Live Demo</a>
       </div>
     </article>

     <article className='project_item'>
      <div className="project_item-image">
          <img src ={IMG3} alt="voting app" />
      </div>
        <h3>Online Voting App</h3>
        <div className="project_item-cta">
        <a href = "https://github.com/IrfanS02/Voting-App" 
        className='btn' target = "_blank">Github</a>
        <a href="https://e-votenow.netlify.app/"
        className='btn btn-primary' target = "_blank">Live Demo</a>
        </div>
     </article>
    </div>
   </section>
  )
}

export default Project