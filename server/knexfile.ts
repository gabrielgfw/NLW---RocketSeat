import path from 'path';

// Possui algumas configurações a mais do que as configurações do banco;
// Mesmo sendo um arquivo typescript, knex não suporta a sintaxe mais simples;
module.exports = {

    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },

    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },

    useNullAsDefault: true,
};