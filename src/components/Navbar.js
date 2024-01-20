import React from 'react'
import homePng from "../images/icons/image-removebg-preview.png"
import pokeballPng from "../images/icons/hero-pokeball-3430739968171e9fe85357e4739be704.png"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      
      <img id="pokeball-img" src={pokeballPng}/>
        <ul>
        <Link
          to='/'
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          <img id="home-button" src={homePng}/>
          
        </Link>
        
        </ul>
    </nav>
  )
}

export default Navbar