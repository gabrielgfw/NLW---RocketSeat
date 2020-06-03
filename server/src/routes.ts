import express from 'express';

// Permite utilizar as rotas desacopladas ao arquivo do servidor.
const routes = express.Router();

// Rota GET resgatando todos os usuários.
routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
});

// Permitindo que o server importe as rotas;
export default routes; 