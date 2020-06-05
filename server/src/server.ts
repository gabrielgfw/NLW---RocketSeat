import express from 'express';
import path from 'path';
import routes from './routes';

const app = express();

// Adicionando a extensão express para compreender arquivos do tipo JSON.
app.use(express.json());
app.use(routes);

// Adicionando rota para acesso às imagens.
// Express.static = Serve para disponibilizar arquivos que o cliente necessite
// baixar para a utilização da aplicação, como imagens por exemplo.
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

// porta 3333 //
app.listen(3333);