const handler = require('./game-detail');
const AgentBuilder = require('./agent-builder');
const assert = require('assert');

describe('Function GameDetail', () => {
    it('should return kof94 when looking for King of Fighters 94', () => {
        // Given
        const agent = new AgentBuilder()
        .withParameters({ 'Game': 'King Of Fighters \'94' })
        .build();

        // When
        handler(agent);

        // Then
        assert.deepEqual(`The King of Fighters '94 est un jeu vidéo de combat développé et édité par SNK sur Neo-Geo MVS, Neo-Geo AES et Neo-Geo CD en 1994`, agent.responseMessages_[0].text);
    });

});