const handler = require('./games');
const AgentBuilder = require('./agent-builder');
const assert = require('assert');

describe('Function Games', () => {
    it('should return games', () => {
        // Given
        const agent = new AgentBuilder().build();

        // When
        handler(agent);

        // Then
        assert.deepEqual('ASO II : Last Guardian', agent.responseMessages_[0].text);
        assert.deepEqual('Andro Dunos', agent.responseMessages_[1].text);
    });

});