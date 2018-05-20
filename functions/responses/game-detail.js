const _ = require('lodash');
const { Card } = require('dialogflow-fulfillment');

const data = require('../data.json');

module.exports = agent => {
    const parameters = agent.parameters;
    const gameName = parameters['Game'];
    const gameState = parameters['GameState'];
    let game = _(data).filter(p => p.title.toLowerCase() === gameName.toLowerCase()).value();

    agent.add(new Card({
            title: `Title: ${gameName}`,
            imageUrl: 'http://img.over-blog-kiwi.com/0/67/38/34/20160125/ob_8c4eb1_kof94-neogeo-jaquette.jpg',
            text: `The King of Fighters '94 est un jeu vidéo de combat développé et édité par SNK sur Neo-Geo MVS, Neo-Geo AES et Neo-Geo CD en 1994`,
            buttonText: 'Wikipedia',
            buttonUrl: 'https://fr.wikipedia.org/wiki/The_King_of_Fighters_\'94'
        })
    );
};