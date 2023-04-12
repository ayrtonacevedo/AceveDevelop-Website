import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"
import Imagen from '../assets/logo.png'
const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick=()=>setClick(!click)

    const [color, setColor]=useState(false)
    const changeColor= () =>{
        if(window.scrollY>=100){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor);



  return (
    <div className={color ? "header header-bg" :  "header"}>
        <Link to="/" className='enlace'>
            {/* <h1>Portfolio</h1> */}
            <img src={Imagen} alt='img'/>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/profile">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className='hamgurger' onClick={handleClick}>
            {click 
            ?(<FaTimes size={20} style={{color:"white"}}/>)
            :(<FaBars size={20} style={{color:"white"}}/>)}
        </div>
    </div>
  )
}

export default Navbar
