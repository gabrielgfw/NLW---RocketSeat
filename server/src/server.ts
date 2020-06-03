import express from 'express';

const app = express();

// -------------------------------------------------------------- //
// Criando uma rota GET 'localhost:3333/users'                    //
//                                                                //
// request  = Utilizado para obter dados sobre a requisição.      //
// response = Devolve uma resposta para o navegador ou aplicação. //
// rota     = Endereço completo da requisição 'url'.              //
// recurso  = Qual endidade estamos acessando do sistema.         //
// -------------------------------------------------------------- //
app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // Retorno definido em formato JSON. //
    return response.json([
        'Gabriel',
        'Talita',
        'Brutus',
        'Gata'
    ]);
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Gabriel',
        email: 'gabriel@email.com'
    };

    return response.json(user);
})


// porta 3333 //
app.listen(3333);