import express from 'express';
import knex from './database/connection';

// Permite utilizar as rotas desacopladas ao arquivo do servidor.
const routes = express.Router();

// Rota GET para resgatar todas as imagens dos itens.
routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');

    // Serialização de dados = transforma os dados para um novo formato
    // que atenda as necessidades do usuário.
    const serializedItems = items.map(item => {
        return {
            title: item.title,
            image_url: 'http://localhost:3333/uploads/' + item.image,
        };
    });



    return response.json(serializedItems);
});

// Permitindo que o server importe as rotas;
export default routes; 