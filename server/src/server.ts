import express from 'express';

const app = express();

// -------------------------------------------------------------- //
// Criando rotas 'localhost:3333/users'.                          //
//                                                                //
// request  = Utilizado para obter dados sobre a requisição.      //
// response = Devolve uma resposta para o navegador ou aplicação. //
// rota     = Endereço completo da requisição 'url'.              //
// recurso  = Qual endidade estamos acessando do sistema.         //
// -------------------------------------------------------------- //

const users = [
    'Gabriel',
    'Talita',
    'Brutus',
    'Gata'
]

// Rota GET resgatando todos os usuários.
app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // Retorno definido em formato JSON.
    return response.json(users);
});

// Rota GET para resgatar um usuário pelo ID.
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);

});

// Rota POST teste.
app.post('/users', (request, response) => {
    const user = {
        name: 'Gabriel',
        email: 'gabriel@email.com'
    };

    return response.json(user);
})


// porta 3333 //
app.listen(3333);