const memberLocations = {
    Paris: ['anzymus']
};

module.exports = agent => {
    const parameters = agent.parameters;
    const city = parameters['geo-city'];
    agent.add(memberLocations[city].join(', '));
};