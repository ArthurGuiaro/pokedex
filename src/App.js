import logo from './logo.svg';

import { Route, Routes, useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react"
import axios from "axios"
import Home from "./pages/Home"
import './App.css';
import Navbar from './components/Navbar';
import PokemonPage from './pages/PokemonPage';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(1000)
  const [test, setTest] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  function getPokemons() {
    const endpoints = []

    for (let i = 1; i <= limit; i += 1) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    if (test) console.log(endpoints)


    let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((result) => {
      setIsLoading(false)
      setPokemons(result)
    })

  }
  // async function getPokemons(){


  //   try {
  //     const {data}= await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&ofset=0")
  //     setPokemons(data.results)
  //     console.log(pokemons)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    getPokemons()
  }, [])
 

  return (
    <div className="App">
      {isLoading ? <div className='spinner'><img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/spinner.gif" /> </div>: 
      <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home data={pokemons} />} />
          <Route path=":pokemonName" element={<PokemonPage data={pokemons} />} />

        </Routes>
        </>
      }
    </div>
  );
}

export default App;
