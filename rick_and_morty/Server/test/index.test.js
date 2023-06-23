const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const charTest ={
    id: 1, name: "pb", species: "hm", gender : "mn", status: "al", origin: {name:"hr"}, image: "jpg"
}

describe('Test de RUTAS',()=>{

    describe('GET /rickandmorty/character/:id',()=>{
        it('Responde con status: 200', async ()=>{
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200)
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const response = await request.get('/rickandmorty/character/1');

            for (const prop in charTest) {
                expect(response.body).toHaveProperty(prop);
            }
        });

        it('Si hay un error responde con status: 500', async ()=>{
            const response = await request.get('/rickandmorty/character/9999a');
            expect(response.statusCode).toBe(500);

        });    
    });

    describe("GET /rickandmorty/login", ()=>{

        it('devuelve un objeto con la propiedad access : true , si el usuario es correcto', 
        async ()=>{
            const response = await request.get('/rickandmorty/login?email=admin@gmail.com&password=admin123');
           
            expect(response.body).toEqual({access : true});
        });
        it('devuelve un objeto con la propiedad access : false , si el usuario es incorrecto', 
        async ()=>{
            const response = await request.get('/rickandmorty/login?email=**@****.**&password=****');
          
            expect(response.body).toEqual({access : false});
        });
    });

    describe("POST /rickandmorty/fav", ()=>{
        it("debes agregar un character al array de favoritos", async ()=>{
            const response = await request.post('/rickandmorty/fav').
            send(charTest)
            
            expect(response.body).toContainEqual(charTest)
        })
        
        it("debes agregar otro character al array de favoritos si eliminar los existentes",
        async ()=>{
            charTest.id = 9999; // cambiamos el id para que sea otro char distinto
            const response = await request.post('/rickandmorty/fav').
            send(charTest);

            expect(response.body.length).toBe(2);
        });
    });

    describe("DELETE /rickandmorty/fav/:id", ()=>{
        it('debes recibir un arreglo con los elementos sin modificar al recibir un ID invalido',
        async ()=>{
            const response = await request.delete('/rickandmorty/fav/2');

            expect(response.body.length).toBe(2);
        })

        it('debes recibir un arreglo con los elementos modificados al recibir un ID valido',
        async()=>{
            const response = await request.delete('/rickandmorty/fav/1');

            expect(response.body.length).toBe(1);

        });
    });

});


