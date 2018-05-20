const { Suggestion } = require('dialogflow-fulfillment');
const datastore = require('../lib/datastore')();
const _ = require('lodash');

module.exports = agent => {
    return new Promise((resolve) => {
        const gameQuery = datastore.createQuery('Game');
        const selectQuery = gameQuery.select();
        return datastore.runQuery(selectQuery, function(err, games) {
            const gameName = _(games).shuffle().first().title;
            agent.add(`Que penses-tu de ${gameName} ?`);
            agent.add(new Suggestion(`J'aime bien`));
            agent.add(new Suggestion(`J'aime pas`));
            agent.setContext({ name: 'game', lifespan: 5, parameters: { name: gameName } });
            return resolve();
        });
    });
};