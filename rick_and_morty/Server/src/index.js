const http = require("http")
const data = require('./utils/data')


http.createServer((request, response)=>{

    response.setHeader('Access-Control-Allow-Origin', '*');

    if(request.url.includes("/rickandmorty/character")){
        const id = request.url.split("/").at(-1);
        // console.log(typeof +id); // con el + parseámos el id de string a number.

        const character = data.find(char=>char.id === +id);

        response.writeHead(200,{'Content-type':'application/json'}).end(JSON.stringify(character))
        
        
    }

}).listen(3001)
