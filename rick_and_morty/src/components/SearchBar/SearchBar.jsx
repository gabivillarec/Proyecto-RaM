import { useState } from 'react';
import style from './SearchBar.module.css'

const SearchBar = ({onSearch})=>{

const [id,setID] = useState('');

const handleChange = (event)=>{
   setID(event.target.value)
}

// En button al atributo onClick , le asignamos una función , ya que si colocamos solamente onSearch(id) esta se ejecuta sin darle click ya que la estamos invocando (entonces al darle click ejecutamos el callback que tiene)
   return (
      <div className={style.input}>
         <input className={style.animatedInput} type='search' placeholder='Character: 1 - 826' onChange={handleChange} value={id}/>
         <button className={style.button}  onClick={()=>{onSearch(id); setID("")}}>Search</button>
      
      </div>
   );
}

export default  SearchBar;