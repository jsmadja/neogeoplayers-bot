const _ = require('lodash');

const data = require('../data.json');

module.exports = agent => {
    const parameters = agent.parameters;
    const gameName = parameters['Game'];
    const gameState = parameters['GameState'];
    let game = _(data).filter(p => p.title.toLowerCase() === gameName.toLowerCase()).value();
    let price;
    if (game.length > 0) {
        if (gameState) {
            switch (gameState) {
                case 'mint':
                    price = `Le prix de ${gameName} en état mint est d'environ ${game[0].mint}€.`;
                    break;
                case 'état gamer':
                    price = `Le prix de ${gameName} en état gamer est d'environ ${game[0].gamer}€.`;
                    break;
                case 'bon état':
                    price = `Le prix de ${gameName} en bon état est d'environ ${game[0].bonEtat}€.`;
                    break;
                default:
                    price = `Le prix de ${gameName} en bon état est d'environ ${game[0].bonEtat}€.`;
                    break;
            }

        } else {
            price = `Le prix de ${gameName} est d'environ ${game[0].gamer}€.`;
        }

    } else {
        price = `Je ne connais pas le prix de ${gameName}.`;
    }
    agent.add(price);
};