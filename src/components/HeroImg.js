import "./HeroImg.css"
import React from 'react'
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-imagen" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="into-img"/>
        </div>
        <div className="content">
            <p>Hola! Soy Ayrton Acevedo 👋 </p>
            <h1>Full Stack Developer.</h1>
            <div>
                <Link to="/project" className="btn">Proyectos</Link>
                <Link to="/contact" className="btn btn-light">Contacto</Link>

            </div>
        </div>
    </div>
  )
}

export default HeroImg
