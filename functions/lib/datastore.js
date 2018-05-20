const Datastore = require('@google-cloud/datastore');

module.exports = () => {
    return new Datastore({ projectId: 'neogeoplayers-bot' });
};