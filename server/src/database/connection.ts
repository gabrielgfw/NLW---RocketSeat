import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {  // dirname = variável global que retorna diretório do arquivo que está sendo executado.
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
});

export default connection;

// Migrations = Histórico do banco de dados;
// Toda alteração no banco de dados deve ser criado um migrations;


