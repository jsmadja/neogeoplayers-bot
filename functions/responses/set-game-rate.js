const _ = require('lodash');
const { Suggestion } = require('dialogflow-fulfillment');

const findGameName = contexts => _.find(contexts, context => context.name.endsWith('/game')).parameters['name'];
const findUsername = contexts => _.find(contexts, context => context.name.endsWith('/user')).parameters['name'];

module.exports = agent => {
    const gameName = findGameName(agent.request_.body.queryResult.outputContexts);
    const username = findUsername(agent.request_.body.queryResult.outputContexts);
    let rating = `tu n'aimes pas`;
    const rate = agent.request_.body.queryResult.parameters['Rating'];
    if (rate === `J'aime`) {
        rating = 'tu aimes';
    }
    agent.add(`Ok ${username} ${rating} ${gameName}`);
    agent.add(new Suggestion('Notons un jeu au hasard !'));
};