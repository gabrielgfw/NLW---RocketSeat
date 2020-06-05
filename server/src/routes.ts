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
            id: item.id,
            title: item.title,
            image_url: 'http://localhost:3333/uploads/' + item.image,
        };
    });

    return response.json(serializedItems);
});

routes.post('/points', async (request, response) => {

    // Utilizando recurso desestruturação:
    // {
    // const name = request.body.name
    // const email = request.body.email
    // }
    // Equivalem à:
    // const { name, email } = request.body;
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = request.body;

    const insertedIds = await knex('points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    });

    const point_id = insertedIds[0];

    const pointItems = items.map((item_id: number) => {
        return {
            item_id,
            point_id
        };
    });

    await knex('point_items').insert(pointItems);

    return response.json({ success: true });
});

// Permitindo que o server importe as rotas;
export default routes; 