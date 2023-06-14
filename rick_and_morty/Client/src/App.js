import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import store from '../src/redux/store'
import { Provider } from 'react-redux';
import Favorites from './components/Favorites/Favorites';


function App() {
   
   const Location = useLocation();
   const navigate = useNavigate();
   const EMAIL = 'admin@gmail.com';
   const PASSWORD = 'admin123';
   let [characters , setCharacters] = useState([]);
   let [access , setAccess] = useState(false)

   const login = (userData)=>{
      if(EMAIL=== userData.email && PASSWORD === userData.password){
         setAccess(true);
         navigate('/home');
      }
   };

   useEffect(()=>{
      !access && navigate('/');
   },[access]);


   const onSearch = (id) => {

      if(characters.length < 5){

         axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               alert('¡No hay personajes con este ID!');
            }
         });
      }else{
        alert ('No Puedes agregar mas de 5 cartas')
      }  
   };

   const onClose = (id)=>{
      let filterCharacter = characters.filter(pj => pj.id !== Number(id))
      
      setCharacters(filterCharacter);
   }
   


   return (
      <Provider store={store}>
      <div className={`App ${Location.pathname !== "/" ? 'home' : ''}`}>
         
      {Location.pathname !== '/' ? <Nav onSearch={onSearch} access={access} setAccess={setAccess}/> : null}
          <Routes>
            <Route path='/' element ={<Form login={login}/>}/>
            <Route path='/home' element ={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element ={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
      </Provider>
      
   );
   
}

export default App;



