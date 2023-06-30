const {User} = require ('../DB_connection');

const login = async (req,res)=>{

    const {email,password} = req.query

    if(!email || !password) return res.status(400).send('Faltan Datos');

    try {
        const findUser = await User.findOne({where:{email}})

        if(!findUser) res.status(400).send('Usuario no encontrado');

        findUser.password === password 
        ? res.json({access: true}) 
        : res.status(403).send("Contraseña incorrecta")
        
    } catch (error) {
      return res.status(500).send(error.message);
        
    }

};

module.exports = login;