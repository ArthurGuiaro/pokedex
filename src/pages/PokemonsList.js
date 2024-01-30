import React from 'react'
import Card from '../components/Card'

const Home = ({ data }) => {
  return (
    <>
      <div className='card-container'>
      {data.map((pokemon, key) => {
          return (
            <Card key={key} img={pokemon.data.sprites.front_default} id={pokemon.data.id} name={pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.substring(1) } types={pokemon.data.types}/>
          )
        })}

      </div>
      </>

  )
}

export default Home