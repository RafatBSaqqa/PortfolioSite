import React from 'react'
import './style.css'
function ContactForm() {
  return (
     <div className='contact-form-content'>
        <form>
            <div className='name-container'>
                <input type='text' name='firstName' placeholder='Fitst Name' />
                <input type='text' name='lastName' placeholder='Last Name' />
            </div>
            <input type='text' name='email' placeholder='Emaill' />
            <textarea type="text" name='message' placeholder='Message'/>
            <button>SEND</button>
        </form>
     </div>
  )
}

export default ContactForm