import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (

    <nav className= "navbar navbar-light bg-light fixed-top ">
        <div className= "container">
        
            <div>
                <h4 className= "brand-name">JibrilTech</h4>
            </div>
         
            <ul className= "nav-links ">
                <li><Link to= "/" className="nav-active">Home</Link></li>
                <li><Link to= "/about">About</Link></li>
                <li><Link to= "/contact">Contact Us</Link></li>
                
            </ul>
            <div className="burger">
                <i className= "fas fa-bars fa-lg"></i>

            </div>
            
        </div>
    </nav>
    )
}
const navbar = () => {
    
}


export default Navbar