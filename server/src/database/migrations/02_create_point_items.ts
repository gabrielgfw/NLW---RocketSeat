import Knex from 'knex';

// Realizará as alterações no banco.
// O parâmetro abaixo está indicando que o 'knex' deve receber
// a tipagem do Knex importanto no início do arquivo.
// Isso fará com que a IDE reconheça a tipagem do knex,
// ajudando nos auto-complete.
export async function up(knex: Knex) {

    // Criando uma tabela, 1º param = nome da tabela
    // 2º param = função que criará o conteúdo da tabela.
    return knex.schema.createTable('point_items', table => {

        // Criando campo 'id', sendo a chave primária da table;
        table.increments('id').primary();

        // Campo 'id' da tabela points, notar chave estrangeira para a ligação das tabelas;
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        // Campo 'id' da tabela items, notar chave estrangeira para a ligação das tabelas;
        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    });
}

// Realizará o Rollback (faz o contrário do método up).
export async function down(knex: Knex) {
    return knex.schema.dropTable('point_items');
}