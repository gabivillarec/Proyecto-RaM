const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req,res)=>{

  try {

    const {id} = req.params;
    const {data} = await axios(`${URL}/${id}`);
    const { status, name, species, origin, image , gender} = data;
  
    if (!name) throw new Error(`ID : ${id} Not found`);

    const character ={id, status, name, species, origin, image , gender};
    return res.status(200).json(character);
        
  } catch (error) {

    error.message.includes('ID')
    ? res.status(404).send(error.message)
    : res.status(500).send(error.message)

  }

}

module.exports = getCharById;