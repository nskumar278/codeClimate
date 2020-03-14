const Sequelize = require ("sequelize");

const database = new Sequelize ('testdb', 'postgres', 'nskumar143', {
    host: 'localhost',
    dialect: 'postgres'
});

database.authenticate ()
    .then (() => console.log('Database Connected Successfully'))
    .catch(err =>
        console.log('Error in database connection.' + err));

module.exports = database;
