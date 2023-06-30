const getCharById = require ('../controllers/getCharById');
const postFav = require ('../controllers/postFav');
const postUser = require ('../controllers/postUser');
const deleteFav = require ('../controllers/deleteFav');
const login = require ('../controllers/login');
const {Router} = require('express')

const router = Router()


router.get ('/character/:id', (req,res)=>{
    getCharById(req,res);
});

router.get ('/login', login); // se puede hacer asi para ahorrar lineas de código ! en vez de pasarle el req y res.

router.post ('/login', postUser);

router.post ('/fav',postFav);

router.delete ('/fav/:id',deleteFav);

module.exports= router;