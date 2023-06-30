import Card from "../Card/Card";
import style from './Favorites.module.css';
import { filterCards, orderCards } from "../../redux/actions";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";


const Favorites = ({myFavorites}) =>{
    
    const [aux, setAux] = useState(false);
    
    const dispatch = useDispatch(false);

    const handleOrder = (event)=>{
    setAux(!aux);
    dispatch(orderCards(event.target.value))
    };

    const handleFilter = (event)=>{
    dispatch(filterCards(event.target.value))
    };


    return(
        <div className={style.container}>
            <div className={style.selects}>
            <select className={style.select1} onChange={handleOrder}>
                <option value = "A">Ascendente</option>
                <option value = "D">Descendente</option>
            </select>
            <select className={style.select1 }onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
                <option value="All">All</option>
            </select>
             </div>
        <div className={style.cards}>
         {
            myFavorites?.map(el=>{ 
                return <Card
                key={el.id}
                id={el.id} 
                name={el.name}
                status={el.status}
                species={el.species}
                gender={el.gender}
                origin={el.origin}
                image={el.image}/>  
            })
         }
        </div>

        </div>
    );
};

const mapStateToProps = (state)=>{
return {
    myFavorites : state.myFavorites
}
}

export default connect( mapStateToProps, null )(Favorites);