import React from 'react'
import './contact.scss'
import { useState, useRef} from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {

  const formRef=useRef();
  const [message,setMessage]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_o578ivr', 'template_21z2lbc', formRef.current, 'aAJxVzWhdhM9Wb2nd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='/assets/main35.png' alt='' />
      </div>
      <div className='right'>
        <h2>Contact.</h2>
        <form ref={formRef} onSubmit={handleSubmit}> 
          <input type='text' placeholder='Enter Email' name='user_email'/>
          <textarea placeholder='Message' name='message'/>
          <button type='submit'>Send</button>
          <br/>
          {message && <div className='spanText'><span>Thanks, I will reply as soon as possible!</span></div>}
        </form>
      </div>
    </div>
  )
}
