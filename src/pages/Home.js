import React from 'react'
import Card from '../components/Card'
import {Link} from "react-router-dom"
import pokeballImg from "../images/icons/Poké_Ball_icon.svg.png"
import randomImg from "../images/icons/random-1dice-icon-437x512-ksswhjk8.png"
const Home = ({toRandomPokemon}) => {
  return (
    <div className='home-main-container'>
    <Link to="/PokemonsList" className='home-container' style={{ textDecoration: 'none'}}>
    <img className='home-first-img' src={pokeballImg}/>
    <h1 className='home-firts'>Pokémons</h1>
    </Link>
    
    <div onClick={()=> toRandomPokemon()} className='home-container'>
    <img className="home-second-img" src={randomImg}/>
    <h1>Random Pokémon</h1>
    </div>
    
    </div>
  ) 
      
}

export default Home