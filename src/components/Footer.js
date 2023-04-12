import "./Footer.css"
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaMailBulk, FaPhone, FaLinkedin, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                <h4>
                    <p>Rosario - Argentina. || San Martin 1150.</p>  
                </h4>
            </div>
            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>3416617301
                </h4>
            </div>
            <div className="mail">
                <h4>
                <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>AYRTONACRC@GMAIL.COM
                </h4>
            </div>
            <div className="social">
              <a href="https://github.com/ayrtonacevedo">
              <FaGithub size={30} style={{color:"white", marginRight:"1rem"}}/>
              </a>
              <a href="https://www.linkedin.com/in/ayrton-nahir-arroyo-acevedo-b795b0212/">
              <FaLinkedin size={30} style={{color:"white", marginRight:"1rem"}}/>
               </a> 
             <FaFacebook size={30} style={{color:"white", marginRight:"1rem"}}/>
             <a href="https://api.whatsapp.com/send?phone=+5493416617301&text=Hola%20Ayrton!Como%20estas?%20Visite%20tu%20porfolio%20y%20me%20puse%20en%20contacto%20con%20vos...%20">
             <FaWhatsapp size={30} style={{color:"white", marginRight:"1rem"}}/>
             </a>
               </div>

        </div>
        <div className="right">
            <h4>Sobre mi</h4>
            <p>En busca de aplicar conocimientos teóricos y prácticos aprendidos durante mi formación académica con el fin de beneficiar a la organización y desarrollarme de forma profesional y personal.
"Creo que el éxito profesional se logra día tras día y parte de ello es formar parte de un equipo de personas exitosas, así que para lograr el éxito en mi carrera profesional me gustaría contar con el apoyo de los mejores"</p>

        </div>
      </div>
    </div>
  )
}

export default Footer
