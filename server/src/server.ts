import express from 'express';

const app = express();

// Adicionando a extensão express para compreender arquivos do tipo JSON.
app.use(express.json());

// -------------------------------------------------------------- //
// Criando rotas 'localhost:3333/users'.                          //
//                                                                //
// request  = Utilizado para obter dados sobre a requisição.      //
// response = Devolve uma resposta para o navegador ou aplicação. //
// rota     = Endereço completo da requisição 'url'.              //
// recurso  = Qual endidade estamos acessando do sistema.         //
//                                                                //
// request param = Parâmetros que vem na própria rota.            //
// query param   = Parâmetros opcionais, exemplo: filtro por nome //
// request body  = Parâmetros para a criação e atualização info.  //
// -------------------------------------------------------------- //

const users = [
    'Gabriel',
    'Talita',
    'Brutus',
    'Gata'
]

// Rota GET resgatando todos os usuários.
app.get('/users', (request, response) => {
    // Neste caso, quem determinará o query param será o próprio client da requisção.
    const search = String(request.query.search);
    // if ternário = condição ? seValorForTrue : seValorForFalse.
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    // Retorno definido em formato JSON.
    return response.json(filteredUsers);
});

// Rota GET para resgatar um usuário pelo ID.
app.get('/users/:id', (request, response) => {
    // Converte o parâmetro em 'Number'.
    const id = Number(request.params.id);
    const user = users[id];
    return response.json(user);

});

// Rota POST teste.
app.post('/users', (request, response) => {
    const data = request.body;
    
    console.log(data);

    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user);
})

// porta 3333 //
app.listen(3333);