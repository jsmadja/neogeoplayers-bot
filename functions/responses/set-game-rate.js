const _ = require('lodash');
const { Suggestion } = require('dialogflow-fulfillment');
const datastore = require('../lib/datastore')();

const findGameName = contexts => _.find(contexts, context => context.name.endsWith('/game')).parameters['name'];
const findUsername = contexts => _.find(contexts, context => context.name.endsWith('/user')).parameters['name'];

module.exports = agent => {
    const gameName = findGameName(agent.request_.body.queryResult.outputContexts);
    const username = findUsername(agent.request_.body.queryResult.outputContexts);
    let rating = `tu n'aimes pas`;
    const rate = agent.request_.body.queryResult.parameters['Rating'];
    const recommend = rate === `J'aime`;
    return new Promise((resolve, reject) => {
        const entity = {
            key: datastore.key(['Rating', `${_.kebabCase(gameName)}-${_.kebabCase(username)}`]),
            data: {
                gameName,
                username,
                recommend,
            },
        };
        datastore.save(entity, (err) => {
            if (err) {
                return reject(err);
            }
            const query = datastore.createQuery('Rating').filter('gameName', '=', gameName);
            datastore.runQuery(query, (err2, ratings) => {
                if (err2) {
                    return reject(err2);
                }
                const recommended = (_.countBy(ratings, rating => !!rating.recommend).true) || 0;
                const recommendation = (recommended / (ratings.length)) * 100;
                agent.add(`Actuellement, ${gameName} est recommandé à ${recommendation}% par les membres de NGP`);
                agent.add(new Suggestion('Notons un jeu au hasard !'));
                return resolve();
            });
        });
    });
};