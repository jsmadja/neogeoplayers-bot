const handler = require('./member-location');
const AgentBuilder = require('./agent-builder');
const assert = require('assert');

describe('Function MemberLocation', () => {
    it('should return anzymus when looking for Paris', () => {
        // Given
        const agent = new AgentBuilder()
        .withParameters({ 'geo-city': 'Paris' })
        .build();

        // When
        handler(agent);

        // Then
        assert.deepEqual('anzymus', agent.responseMessages_[0].text);
    });

    it('should return personne when looking for Mars', () => {
        // Given
        const agent = new AgentBuilder()
        .withParameters({ 'geo-city': 'Mars' })
        .build();

        // When
        handler(agent);

        // Then
        assert.deepEqual(`Personne n'habite à Mars.`, agent.responseMessages_[0].text);
    });
});