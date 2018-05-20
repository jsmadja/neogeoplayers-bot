const handler = require('./rate-game');
const AgentBuilder = require('./agent-builder');
const assert = require('assert');

describe('Function RateGame', () => {
    it('should return Que penses-tu de  ?', () => {
        // Given
        const agent = new AgentBuilder()
        .build();

        // When
        handler(agent);

        // Then
        assert.ok(agent.responseMessages_[0].text.startsWith('Que penses-tu de '));
    });

});