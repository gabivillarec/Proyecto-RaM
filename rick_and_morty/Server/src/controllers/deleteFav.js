const {Favorite} = require ('../DB_connection');


const deleteFav = async (req,res)=>{

 const {id} = req.params;

 try {
    await Favorite.destroy({where:{id}});

    const allFav =  await Favorite.findAll();

    return res.json(allFav);

 } catch (error) {
    return res.status(500).send(error.message);
 }

};

module.exports = deleteFav