const datastore = require('../lib/datastore')();

module.exports = agent =>
    new Promise((resolve) => {
        const companyQuery = datastore.createQuery('Game');
        const selectQuery = companyQuery.select();
        return datastore.runQuery(selectQuery, function(err, games) {
            games.forEach(game => agent.add(game.title));
            return resolve();
        });
    });