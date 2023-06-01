
import Card from '../Card/Card'
import style from "./Cards.module.css"

const Cards= (props) =>{
 
   return <div className={style.contenedor}>
      {props.characters.map(card => {

            return (
            <Card 
            key={card.id}
            id={card.id} 
            name={card.name}
            status={card.status}
            species={card.species}
            gender={card.gender}
            origin={card.origin.name}
            image={card.image}
            onClose={props.onClose}
            />)
         })
      }
   </div>;
}
export default Cards;