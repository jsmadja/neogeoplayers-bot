const Database = require('./database');

const Repository = {
    getGames: () => Database.query(`SELECT * FROM games`),
};

module.exports = Repository;