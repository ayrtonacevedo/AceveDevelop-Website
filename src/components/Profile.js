import React from 'react'
import './Profile.css'
import Img from '../assets/profile.png'
import { 
    SiJavascript, 
    SiReact, 
    SiExpress, 
    SiCss3, 
    SiHtml5,
    SiPostgresql,
    SiBootstrap,
    SiTrello,
    SiVuedotjs,
    SiRedux,
    SiAuth0,
    SiScrumalliance,
    SiGit
} from "react-icons/si";
import { FaNode, FaGithub } from "react-icons/fa";
const Profile = () => {
  return (
    <div className='about1'>
        <div className='left1'>
            <img src={Img}></img>
            <div className='cv'>
            <a href="https://drive.google.com/file/d/11NESCF9maJRn70OE1UmYqdwUhmukZfLp/view?usp=share_link">
            Descargar CV
            </a>
            </div>
        </div>
        
        <div className='right1'>
            <h1 className='titulo-tegnologias'>Techskills</h1>
            <div className='iconsTech'>
                <div className='iconos'>
                <SiHtml5 size='3rem' color='white'/>
            <SiCss3 size='3rem' color='white'/>
            <SiJavascript size='3rem' color='white'/>
            <SiBootstrap size='3rem' color='white'/>
            <SiReact size='3rem' color='white'/>
            <SiRedux size='3rem' color='white'/>
            <SiExpress size='3rem' color='white'/>
            <SiVuedotjs size='3rem' color='white'/>
            <FaNode size='3rem' color='white'/>
            <SiPostgresql size='3rem' color='white'/>
            <SiAuth0 size='3rem' color='white'/>
                </div>
           
            </div>
            <div className='contenedor-herramientas'>
              <h1 className='titulo-herramientas'>Tools</h1>
              <div className='icon-herramientas'>
              <FaGithub size='3rem' color='white'/>
              <SiGit size='3rem' color='white'/>
              <SiTrello size='3rem' color='white'/>
              <SiScrumalliance size='3rem' color='white'/>
              </div>
            
            </div>


        </div>
      
    </div>
  )
}

export default Profile
