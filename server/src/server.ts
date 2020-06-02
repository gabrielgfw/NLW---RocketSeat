import express from 'express';

const app = express();
// --------------------------------------------------------------- //
// request = utilizado para obter dados sobre a requisição.        //
// response = devolver uma resposta para o navegador ou aplicação. //
// --------------------------------------------------------------- //
app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.send('Hello World');
});

app.listen(3333);