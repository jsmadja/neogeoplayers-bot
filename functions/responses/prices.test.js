const handler = require('./prices');
const AgentBuilder = require('./agent-builder');
const assert = require('assert');

describe('Function Prices', () => {
    it('should return 220 when looking for Dunk Dream price', () => {
        // Given
        const agent = new AgentBuilder()
        .withParameters({ 'Game': 'Dunk Dream' })
        .build();

        // When
        handler(agent);

        // Then
        assert.deepEqual(`Le prix de Dunk Dream est d'environ 220€.`, agent.responseMessages_[0].text);
    });

    it('should return 100 when looking for Raguy price', () => {
        // Given
        const agent = new AgentBuilder()
        .withParameters({ 'Game': 'Raguy' })
        .build();

        // When
        handler(agent);

        // Then
        assert.deepEqual(`Le prix de Raguy est d'environ 100€.`, agent.responseMessages_[0].text);
    });

    it('should return 100 when looking for raguy price', () => {
        // Given
        const agent = new AgentBuilder()
        .withParameters({ 'Game': 'raguy' })
        .build();

        // When
        handler(agent);

        // Then
        assert.deepEqual(`Le prix de raguy est d'environ 100€.`, agent.responseMessages_[0].text);
    });

    it('should return 150 when looking for raguy mint price', () => {
        // Given
        const agent = new AgentBuilder()
        .withParameters({ 'Game': 'raguy', 'GameState': 'mint'})
        .build();

        // When
        handler(agent);

        // Then
        assert.deepEqual(`Le prix de raguy en état mint est d'environ 150€.`, agent.responseMessages_[0].text);
    });

    it('should return &00 when looking for raguy etatGamer price', () => {
        // Given
        const agent = new AgentBuilder()
        .withParameters({ 'Game': 'raguy', 'GameState': 'état gamer'})
        .build();

        // When
        handler(agent);

        // Then
        assert.deepEqual(`Le prix de raguy en état gamer est d'environ 100€.`, agent.responseMessages_[0].text);
    });

    it('should return 120 when looking for raguy bon état price', () => {
        // Given
        const agent = new AgentBuilder()
        .withParameters({ 'Game': 'raguy', 'GameState': 'bon état'})
        .build();

        // When
        handler(agent);

        // Then
        assert.deepEqual(`Le prix de raguy en bon état est d'environ 120€.`, agent.responseMessages_[0].text);
    });

    it('should return Je ne connais pas le prix de Dunk Dream 2 when looking for Dunk Dream 2 price', () => {
        // Given
        const agent = new AgentBuilder()
        .withParameters({ 'Game': 'Dunk Dream 2' })
        .build();

        // When
        handler(agent);

        // Then
        assert.deepEqual('Je ne connais pas le prix de Dunk Dream 2.', agent.responseMessages_[0].text);
    });

});