const {Favorite} = require ('../DB_connection');

const postFav = async (req, res)=>{

    const {id,name,origin,status,image,species,gender}= req.body;

    if(!id || !name || !origin || !status || !image || !species || !gender) return res.status(401).send("Faltan datos")

    try {
        await Favorite.findOrCreate({where:{id,name,origin,status,image,species,gender}});

        const favoritos = await Favorite.findAll()

        return res.json(favoritos);     

    } catch (error) {
        return res.status(500).send(error.message);       
    }
};

module.exports = postFav;