
import { Route, Routes} from 'react-router-dom'
import React, { useState, useEffect } from "react"
import axios from "axios"
import Home from "./pages/Home"
import './App.css';
import Navbar from './components/Navbar';
import PokemonPage from './pages/PokemonPage';
import ComingSoon from './pages/ComingSoon';
import PokemonsList from "./pages/PokemonsList"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [pokemonsData, setPokemonsData] = useState([])
  // const [evolutionsData, setEvolutionsData] =useState([])
  const [limitOfPokemons, setLimitOfPokemons] = useState(200)
  // const [limitOfEvolutions, setLimitOfEvolutions] = useState(3)
  const [test, setTest] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [isEmpty,setIsEmpty]= useState(false)
  const [randomName, setRandomName] = useState("")

  function toRandomPokemon(){
    let i=Math.floor(Math.random() * pokemons.length)
    setRandomName(pokemons[i].data.name)
    setTimeout(() => {
      setRandomName(null)
    }, 100);
  }

  function getPokemons() {
    const endpoints = []

    for (let i = 1; i <= limitOfPokemons; i += 1) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    if (test) console.log(endpoints)


    let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((result) => {
      setIsLoading(false)
      setPokemonsData(result)
      setPokemons(result)
    })

  }

  // function organizeEvolutions(){

  //   pokemonsData.map((pokemon)=>{
  //     for(let i = 0; i> evolutionsData.length; i +=1){
  //       for (let a = 0; a < evolutionsData[i].data.chain.length ; a+= 1) {
  //         if(pokemon.data.name === evolutionsData[i].data.chain){}
          
  //       }
  //     }
  //   })

  // }

  // function getEvolutions() {
  //   const endpoints = []

  //   for (let i = 1; i <= limitOfEvolutions; i += 1) {
  //     endpoints.push(`https://pokeapi.co/api/v2/evolution-chain/${i}/`)
  //   }
  //   if (test) console.log(endpoints)
    
    
  //   let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((result) => {
  //     setIsLoading(false)
  //     setEvolutionsData(result)
  //     if(evolutionsData.length === limitOfEvolutions) organizeEvolutions()
  //   if (test) console.log(evolutionsData)
  //   })
  // }

  function getData(){
    getPokemons()
    getEvolutions()
    setLimitOfPokemons(2000)
    }
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
    getData()
  }, [])


 function searchPokemon(search){
  let newPokemons
    if (search  === "") newPokemons = [...pokemonsData]
    else {
      newPokemons = [...pokemonsData].filter(pokemon => pokemon.data.name.toLowerCase().includes(search.trim().toLowerCase()))
    }

    if(newPokemons.length === 0) setIsEmpty(true)
    else{
      setIsEmpty(false)
  }
    setPokemons(newPokemons)
 }

  return (
    <div className="App">
      {isLoading ? <div className='spinner'><img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/spinner.gif" /> </div>: 
      <>
      <Navbar searchPokemon={searchPokemon} toRandomPokemon={toRandomPokemon} randomName={randomName}/>
      {/* <button onClick={()=>console.log(evolutionsData)}>a</button> */}
      <Routes>
          <Route path="/pokemonsList" element={<PokemonsList data={pokemons} />} />
          <Route path=":pokemonName" element={<PokemonPage data={pokemons} />} />
          <Route path="Berries" element={<ComingSoon/>}/>
          <Route path="Items" element={<ComingSoon/>}/>
          <Route path="/" element={<Home toRandomPokemon={toRandomPokemon}/>}/>

        </Routes>
        </>
      }
    </div>
  );
}

export default App;
