const { Client } = require('pg');

const connection = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'agenda_eventos',
    password: '1',
    port: 5432
})

module.exports = connection;