const { Suggestion } = require('dialogflow-fulfillment');
const _ = require('lodash');
const data = require('../data.json');

module.exports = agent => {
    const gameName =  _(data).shuffle().first().title;
    agent.add(`Que penses-tu de ${gameName} ?`);
    agent.add(new Suggestion(`J'aime bien`));
    agent.add(new Suggestion(`J'aime pas`));
    agent.setContext({ name: 'game', lifespan: 5, parameters: { name: gameName }});
};