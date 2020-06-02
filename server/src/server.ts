import express from 'express';

const app = express();
// --------------------------------------------------------------- //
// Criando uma rota GET 'localhost:3333/users'                     //
//                                                                 //
// request = utilizado para obter dados sobre a requisição.        //
// response = devolver uma resposta para o navegador ou aplicação. //
// --------------------------------------------------------------- //
app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // Retorno definido em formato JSON. //
    response.json([
        'Gabriel',
        'Talita',
        'Brutus',
        'Gata'
    ]);
});
// porta 3333 //
app.listen(3333);