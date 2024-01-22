import React, { useState } from 'react'
import homePng from "../images/icons/image-removebg-preview.png"
import pokeballPng from "../images/icons/hero-pokeball-3430739968171e9fe85357e4739be704.png"
import { Link, NavLink, Navigate } from 'react-router-dom'
import {Input} from "antd"
import searchIcon from "../images/icons/search-13-64.png"

const Navbar = ({searchPokemon}) => {
  const [search, setSearch]= useState("")

  function handleSearch (e){
    let newText = e.target.value.trim().toLowerCase()
    let text = e.target.value
    setSearch(text)
    searchPokemon(newText)
  }
  return (
    <nav>
      
      <Link to="/">
      <img id="pokeball-img" src={pokeballPng}/>
      </Link>
      <div id="nav-container">

      <div id='search-container'>

      <label><img className="search-icon" src={searchIcon}/></label>
      <Link to="/">
      <Input className='search-input' value={search} type="text" onChange={handleSearch} />
      </Link>
      </div>
      
      <ul>
        <Link
          to='/'
          id="anchor-tag"
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          {/* <img id="home-button" src={homePng} /> */}
          <h2>Home</h2>
        </Link>


        <NavLink to="/berries" id="anchor-tag" className={({ isActive }) => (isActive ? 'selected' : '')}>
          <h2>Berries</h2>
        </NavLink>
        <Link to="/items" id="anchor-tag" className={({ isActive }) => (isActive ? 'selected' : '')}>
          <h2>Items</h2>
        </Link>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar