import style from './Card.module.css'
import { NavLink } from 'react-router-dom';

const Card = (props)=>{

   return (
      <div className={style.tarjeta}>
         <button onClick={()=>props.onClose(props.id)}>x</button>
         <NavLink to={`/detail/${props.id}`}>
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


export default Card