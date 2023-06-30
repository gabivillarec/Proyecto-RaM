const {User} = require ('../DB_connection');

const postUser = async (req,res)=>{
      const {email,password} = req.body;

      if(!email || !password) return res.status(400).send("Faltan datos");

      try {
        const usuario = await User.findOrCreate({where:{email,password}});
      
        return res.json(usuario);

         //Si el usuario existe, se responde con un estado 200 y se responde el usuario. Si se creó un nuevo usuario, se responde con un estado 201 y se responde el usuario.

      } catch (error) {
        return res.status(500).json(error.message);
      }

};



module.exports = postUser;