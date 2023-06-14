


const validation = (userData)=>{
    const errors = {}

    if (!userData.email){
    errors.email = "El correo electrónico no puede estar vacío.";
 
    }
    if(!/[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-zA-Z]/gm.test(userData.email)){
    errors.email= "El correo electrónico debe tener un formato válido."
    }
    if(userData.email>35){
    errors.email= "El correo electrónico no puede tener más de 35 caracteres.";
    }
    if(!/.*\d+.*/.test(userData.password)){
    errors.password= "La contraseña debe contener al menos un número."    
    }
    if(userData.password.length < 6 || userData.password.length > 10){
    errors.password= "La contraseña debe tener una longitud entre 6 y 10 caracteres.";
    }

    return errors;
}


export default validation 

