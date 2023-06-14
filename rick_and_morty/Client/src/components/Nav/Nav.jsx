import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = ({onSearch, access, setAccess})=>{ 

    const navigate = useNavigate();

    const handleLogOut = ()=>{
    setAccess(false);
    navigate('/')
    }

    return(

        <div className={style.container}>
           <button className={style.about}><NavLink className={style.NavLink} to='/about'>About</NavLink></button>
           <button className={style.about}><NavLink className={style.NavLink} to='/favorites'>Favorito</NavLink></button>
           <SearchBar onSearch={onSearch}/>
            <button className={style.home}><NavLink className={style.NavLink} to='/home'>Home</NavLink></button>
            <button className={style.out} onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default Nav;