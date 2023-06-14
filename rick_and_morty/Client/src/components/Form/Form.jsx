import Style from "./Form.module.css"
import { useState } from "react";
import validation from '../validation'



const Form = (({login}) =>{

    let [userData, setUserData] = useState ({email:'',password:''});
    let [errors, setErrors] = useState({});

   const handleChange = (event) =>{
    setUserData ({...userData, [event.target.name] : event.target.value});

    setErrors (validation({...userData , [event.target.name] : event.target.value}))
   }

   const handleSubmit = (event)=>{
   event.preventDefault();
   login(userData);
   }
 


    return(

        <div>

            <form action="email" onSubmit={handleSubmit}>

                <label htmlFor="email">Email:</label>
                <input type="email" className={Style.email} name="email" value={userData.email} onChange={handleChange} placeholder="Enter your email..."/>

                {errors.email && <p className={Style.pUno}>{errors.email}</p>}

                <label htmlFor="password">Password:</label>
                <input type="password" className={Style.password} name="password" value={userData.password} onChange={handleChange} placeholder="Password"/>

                {errors.password && <p className={Style.pDos}>{errors.password}</p>}

                <button type="submit" className={Style.submit} disabled={!userData.email || !userData.password}>Submit</button>

            </form>

        </div>
    )
});

export default Form

