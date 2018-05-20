const _ = require('lodash');
const { Suggestion } = require('dialogflow-fulfillment');
const datastore = require('../lib/datastore')();

const findGameName = contexts => _.find(contexts, context => context.name.endsWith('/game')).parameters['name'];

module.exports = agent => {
    const gameName = findGameName(agent.request_.body.queryResult.outputContexts);
    return new Promise((resolve, reject) => {
        const query = datastore.createQuery('Rating').filter('gameName', '=', gameName);
        datastore.runQuery(query, (err, ratings) => {
            if (err) {
                return reject(err);
            }
            const recommended = (_.countBy(ratings, rating => !!rating.recommend).true) || 0;
            const recommendation = (recommended / (ratings.length)) * 100;
            agent.add(`Actuellement, ${gameName} est recommandé à ${recommendation}% par les membres de NGP`);
            agent.add(new Suggestion('Notons un jeu au hasard !'));
            return resolve();
        });
    });
};