const memberLocations = {
    Paris: ['anzymus']
};

module.exports = agent => {
    const parameters = agent.parameters;
    const city = parameters['geo-city'];
    const memberLocation = memberLocations[city] || [`Personne n'habite à ${city}.`];
    agent.add(memberLocation.join(', '));
};