// Imports the Google Cloud client library
const Datastore = require('@google-cloud/datastore');

// Creates a client
const datastore = new Datastore({
    projectId: 'neogeoplayers-bot',
});

const data = require('./data.json');

data.forEach(game => {

    const taskKey = datastore.key(['Game']);
    const task = {
        key: taskKey,
        data: game,
    };
    datastore
    .save(task)
    .then(() => console.log(`Saved ${task.key}: ${task.data.title}`))
    .catch(err => console.error('ERROR:', err));
});

