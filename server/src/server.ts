import express from 'express';
import routes from './routes';

const app = express();

// Adicionando a extensão express para compreender arquivos do tipo JSON.
app.use(express.json());
app.use(routes);

// porta 3333 //
app.listen(3333);