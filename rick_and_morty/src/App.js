import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import {useState} from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';


function App() {

   let [characters , setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id)=>{
      let filterCharacter = characters.filter(pj => pj.id !== Number(id))
      setCharacters(filterCharacter);
   }

   return (

      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element ={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element ={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
      
   );
   
}

export default App;
