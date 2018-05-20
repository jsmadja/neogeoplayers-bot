module.exports = agent => require('../data.json').forEach(p => agent.add(p.title));

/*
const Repository = require('../lib/repository');

module.exports = agent =>
    new Promise((resolve) => {
        Repository.getGames()
        .then(games => {
            games.forEach(game => agent.add(game.title));
            return resolve();
        });
    });
 */