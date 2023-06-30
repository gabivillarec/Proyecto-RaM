import style from './Card.module.css'
import { NavLink } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useState ,useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';


const Card = (props)=>{
   
   let[ isFav , setIsFav ] = useState(false)
   
   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false); 
         props.removeFav(props.id)
      }else
      {setIsFav(true); 
         props.addFav(props)
      };
   }
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   },[props.myFavorites]);
   
   
   const location = useLocation();
   return (
      <div className={style.tarjeta}>
        
         <button onClick={handleFavorite} className={style.corazon}>{isFav ? "❤️" : "🤍"}</button>
         {location.pathname !== '/favorites' && <button onClick={()=>props.onClose(props.id)}>x</button>}
         <NavLink className={style.Navtitle} to={`/detail/${props.id}`}>
         <h2 className={style.title}>{props.name}</h2>
         </NavLink>
          <img className={style.img} src={props.image} alt=''/>
         <div className={style.lista}>
            <h3>{props.species}</h3>
            <h3>Condition: {props.status}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Origin: {props.origin}</h3>
         </div>

      </div>
   );
}

const mapStateToProps = (state)=>{
return{
myFavorites: state.myFavorites
}
}

const mapDispatchToProps= (dispatch) => {return{
   addFav: (character)=> dispatch(addFav(character)),
   removeFav: (id)=> dispatch(removeFav(id))
}};

export default connect( mapStateToProps, mapDispatchToProps )(Card);