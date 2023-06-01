import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom';

const Nav = ({onSearch})=>{


    return(

        <div className={style.container}>
           <button><NavLink to='/about'>About</NavLink></button>
          <SearchBar onSearch={onSearch}/>
            <button><NavLink to='/home'>Home</NavLink></button>
        </div>
    )
}

export default Nav;