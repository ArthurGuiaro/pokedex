import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import bugImg from "../images/types/Pokemon_Type_Icon_Bug.png"
import darkImg from "../images/types/Pokemon_Type_Icon_Dark.png"
import dragonImg from "../images/types/Pokemon_Type_Icon_Dragon.png"
import electricImg from "../images/types/Pokemon_Type_Icon_Electric.png"
import fairyImg from "../images/types/Pokemon_Type_Icon_Fairy.png"
import fightingImg from "../images/types/Pokemon_Type_Icon_Fighting.png"
import fireImg from "../images/types/Pokemon_Type_Icon_Fire.png"
import flyingImg from "../images/types/Pokemon_Type_Icon_Flying.png"
import ghostImg from "../images/types/Pokemon_Type_Icon_Ghost.png"
import grassImg from "../images/types/Pokemon_Type_Icon_Grass.png"
import groundImg from "../images/types/Pokemon_Type_Icon_Ground.png"
import iceImg from "../images/types/Pokemon_Type_Icon_Ice.png"
import normalImg from "../images/types/Pokemon_Type_Icon_Normal.png"
import poisonImg from "../images/types/Pokemon_Type_Icon_Poison.png"
import psychicImg from "../images/types/Pokemon_Type_Icon_Psychic.png"
import rockImg from "../images/types/Pokemon_Type_Icon_Rock.png"
import steelImg from "../images/types/Pokemon_Type_Icon_Steel.png"
import waterImg from "../images/types/Pokemon_Type_Icon_Water.png"
import axios from "axios"

const PokemonPage = ({ data }) => {
    const { pokemonName } = useParams()
    const [pokemon, setPokemon] = useState()
    const [showShiny, setShowShiny] = useState(false)

    function getPokemon() {
        data.map((poke) => {
            if (poke.data.name === pokemonName.toLowerCase()) setPokemon(poke.data)

        })



    }

    useEffect(() => {
        getPokemon()
        

    }, [pokemonName])

    axios.get("https://pokeapi.co/api/v2/evolution-chain/549/").then((res)=> console.log(res))    
    return (
        <div className='pokemon-page-main-container'>
            <div className='pokemon-page-first-container'>
                <img className="pokemon-img" src={showShiny ? pokemon?.sprites.other.home.front_shiny : pokemon?.sprites.other.home.front_default} />
            </div>
            <div className='pokemon-page-second-container'>
                <div className='page-text-container'>
                    <h1 className='page-pokemon-name'>{pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.substring(1)}</h1>
                    <p className='page-pokemon-id'>{`#${pokemon?.id}`}</p>
                </div>
                <div className='img-types-container' id='page-id-container'>
                    {pokemon?.types.map((type) => {
                        let imgType
                        if (type.type.name === "bug") imgType = bugImg
                        if (type.type.name === "dark") imgType = darkImg
                        if (type.type.name === "dragon") imgType = dragonImg
                        if (type.type.name === "electric") imgType = electricImg
                        if (type.type.name === "fairy") imgType = fairyImg
                        if (type.type.name === "fighting") imgType = fightingImg
                        if (type.type.name === "fire") imgType = fireImg
                        if (type.type.name === "flying") imgType = flyingImg
                        if (type.type.name === "ghost") imgType = ghostImg
                        if (type.type.name === "grass") imgType = grassImg
                        if (type.type.name === "ground") imgType = groundImg
                        if (type.type.name === "ice") imgType = iceImg
                        if (type.type.name === "normal") imgType = normalImg
                        if (type.type.name === "poison") imgType = poisonImg
                        if (type.type.name === "psychic") imgType = psychicImg
                        if (type.type.name === "rock") imgType = rockImg
                        if (type.type.name === "steel") imgType = steelImg
                        if (type.type.name === "water") imgType = waterImg

                        return (
                            <img className="img-type" src={imgType} />
                        )
                    })}
                </div>
                <div className='page-details'>
                    <div className='details-column'>
                        <div className='detail-cell'>

                            <h2>Height</h2>
                            <p>{`${pokemon?.height/10} m`}</p>
                        </div>
                        <div className='detail-cell'>

                            <h2>Weight</h2>
                            <p>{`${pokemon?.weight/10} kg`}</p>
                        </div>

                        <div>

                        </div>
                    </div>

                    <div className='details-column'>
                        <div className='detail-container'>
                            <h2>Height</h2>
                            <p>a</p>
                        </div>

                        <div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PokemonPage