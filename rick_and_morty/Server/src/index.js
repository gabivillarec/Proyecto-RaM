const http = require("http");
const {getCharById} = require("./controllers/getCharById");


http.createServer((request, response)=>{

    response.setHeader('Access-Control-Allow-Origin', '*');

    if(request.url.includes("/rickandmorty/character")){
        const id = request.url.split("/").at(-1);
        getCharById(response, +id) // con el + convertimos de string a number
    }

}).listen(3001)
