import "./Form.css"
import React from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
const form =document.getElementById('form')



  const sendEmail=(event)=>{
    event.preventDefault();
    emailjs.sendForm('service_3bcs0v9','template_gk2papw',event.target,'zcY076_xrgkXPUPYX')
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
    form.reset()
    alert('Mensaje enviado')
    
  }
  return (
    <div className="form">
        <form onSubmit={sendEmail} id="form">
            <label>Your Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="email" name="user_email"></input>
            <label>Subject</label>
            <input type="text" name="user_subject"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" name="user_message"/>
            <button className="btn">Submit</button>
        </form>
      
    </div>
  )
}

export default Form
