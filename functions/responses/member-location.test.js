const handler = require('./member-location');
const AgentBuilder = require('./agent-builder');
const assert = require('assert');

describe('Function', () => {
    it('MemberLocation', () => {
        // Given
        const agent = new AgentBuilder()
        .withParameters({ 'geo-city': 'Paris' })
        .build();

        // When
        handler(agent);

        // Then
        assert.deepEqual('anzymus', agent.responseMessages_[0].text);
    });
});