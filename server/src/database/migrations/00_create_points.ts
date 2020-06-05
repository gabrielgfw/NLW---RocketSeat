import Knex from 'knex';

// Realizará as alterações no banco.
// O parâmetro abaixo está indicando que o 'knex' deve receber
// a tipagem do Knex importanto no início do arquivo.
// Isso fará com que a IDE reconheça a tipagem do knex,
// ajudando nos auto-complete.
export async function up(knex: Knex) {

    // Criando uma tabela, 1º param = nome da tabela
    // 2º param = função que criará o conteúdo da tabela.
    return knex.schema.createTable('points', table => {

        // Criando campo 'id', sendo a chave primária da table;
        table.increments('id').primary();
        // Campo de 'image', não pode ser nulo;
        table.string('image').notNullable();
        // Campo de nome, não pode ser nulo;
        table.string('name').notNullable();
        // Campo de email, não pode ser nulo;
        table.string('email').notNullable();
        // Campo WhatsApp, não pode ser nulo;
        table.string('whatsapp').notNullable();
        // Campo Latitude, não pode ser nulo;
        table.decimal('latitude').notNullable();
        // Campo Longitude, não pode ser nulo;
        table.decimal('longitude').notNullable();
        // Campo cidade, não pode ser nulo;
        table.string('city').notNullable();
        // Campo uf, não pode ser nulo;
        table.string('uf', 2).notNullable();

    });
}

// Realizará o Rollback (faz o contrário do método up).
export async function down(knex: Knex) {
    return knex.schema.dropTable('points');
}