import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from "./Detail.module.css"

const Detail = ()=>{

const { id } = useParams();
const [character, setCharacter] = useState({})

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return(      // El condicional que usamos en character "?" es por la asincronía , para esperar la respuesta del servidor y que no nos tire error (verifica antes que sea true) también el origin al ser un objeto
        <div className={style.container}>

           <div className={style.Detail}>  
           <img src={character?.image} alt="" />
           <div className={style.description}>
           <h1>Name: {character?.name}</h1>  
           <h2>Specie: {character?.species}</h2>
           <h2>Status: {character?.status}</h2>
           <h2>Gender: {character?.gender}</h2>
           <h2>Origin: {character?.origin?.name}</h2>
           </div>
           </div>

        </div>
    )

}

export default Detail