import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css';
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

const Card = ({ img,id, name, types }) => {
  return (
    <Link className='card' to={`/${name}`}>
      <img className="card-img" src={img} />
      <div className='detail-container'>
        <p id='id'>{`#${id}`}</p>
        <h1 id='card-name'>{name}</h1>
        <div className='img-types-container'> 

          {types.map((type) => {
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
      </div>
    </Link>
  )
}

export default Card