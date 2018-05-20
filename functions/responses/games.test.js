const handler = require('./games');
const AgentBuilder = require('./agent-builder');
const assert = require('assert');

describe('Function Games', () => {
    it('should return games', () => {
        // Given
        const agent = new AgentBuilder().build();

        // When
        return handler(agent)

        // Then
        .then(() => {
            assert.deepEqual('King Of Fighters \'94', agent.responseMessages_[0].text);
            assert.deepEqual('Sengoku Densho', agent.responseMessages_[1].text);
        });
    });

});