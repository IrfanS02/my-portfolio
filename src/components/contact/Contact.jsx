import React from 'react'
import './contact.css'
import { MdMarkEmailRead } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_864tuhk', 'template_txos7id', form.current, 'gbdlU_Yjt3W04ShjO')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
        e.target.reset()
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
           <MdMarkEmailRead className='contact_option-icon' />
             <h4> Email </h4>
             <h5> irfan22official25@gmail.com</h5>
             <a href="mailto:irfan22official25@gmail.com" target='_blank'>
              Send a message
             </a>
          </article>
          <article className="contact_option">
            <FaInstagram className='contact_option-icon' />
             <h4> Instagram </h4>
             <h5>_i.rfxnn.__</h5>
             <a href="https://www.instagram.com/_i.rfxnn.__/" target='_blank'>
              Send a message
             </a>
          </article>
          <article className="contact_option">
           <FaWhatsapp className='contact_option-icon'/>
             <h4> Whatsapp </h4>
             <h5>(+91) 7200442551</h5>
             <a href="https://api.whatsapp.com/send?phone=917200442551" target='_blank' rel="noreferrer">
              Send a message
             </a>
          </article>
        </div>
        { /* END OF CONTACT OPTIONS */}
        <form ref={form}  onSubmit={sendEmail}>
              <input type="text" name="name" placeholder='Your Full Name'required />
              <input type="email" name="email" placeholder='Your Email'required />
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact