const handler = require('./set-game-rate');
const AgentBuilder = require('./agent-builder');
const assert = require('assert');

describe('Function SetRateGame', () => {
    it('should return Ok anzymus tu aimes King of Fighters 94', () => {
        // Given
        const agent = new AgentBuilder()
        .withRawContent({
            "responseId": "d55f14e5-af65-443a-a131-65cbe73fc478",
            "queryResult": {
                "queryText": "J'aime bien",
                "action": "RateGame.SetGameRate",
                "parameters": {
                    "Rating": "J'aime"
                },
                "allRequiredParamsPresent": true,
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": [
                                ""
                            ]
                        }
                    }
                ],
                "outputContexts": [
                    {
                        "name": "projects/neogeoplayers-bot/agent/sessions/4b0dc12c-505f-43c2-b750-5c7987ebd1d7/contexts/game",
                        "lifespanCount": 4,
                        "parameters": {
                            "name.original": "julien",
                            "name": "King of Fighters '94",
                            "username.original": "",
                            "username": "julien"
                        }
                    },
                    {
                        "name": "projects/neogeoplayers-bot/agent/sessions/4b0dc12c-505f-43c2-b750-5c7987ebd1d7/contexts/rategame-followup",
                        "lifespanCount": 1
                    },
                    {
                        "name": "projects/neogeoplayers-bot/agent/sessions/4b0dc12c-505f-43c2-b750-5c7987ebd1d7/contexts/user",
                        "lifespanCount": 4,
                        "parameters": {
                            "name.original": "julien",
                            "name": "julien",
                            "username.original": "",
                            "username": "julien"
                        }
                    }
                ],
                "intent": {
                    "name": "projects/neogeoplayers-bot/agent/intents/c5503109-43ae-436b-a0ec-48642ba75126",
                    "displayName": "SetGameRate"
                },
                "intentDetectionConfidence": 1,
                "diagnosticInfo": {},
                "languageCode": "fr"
            },
            "originalDetectIntentRequest": {
                "payload": {}
            },
            "session": "projects/neogeoplayers-bot/agent/sessions/4b0dc12c-505f-43c2-b750-5c7987ebd1d7"
        })
        .build();

        // When
        return handler(agent)
        .then(() => {
            assert.deepEqual(`Ok julien tu aimes King of Fighters '94`, agent.responseMessages_[0].text);
        });
    });

    it('should return Ok anzymus tu aimes Raguy', () => {
        // Given
        const agent = new AgentBuilder()
        .withRawContent({
            "responseId": "d55f14e5-af65-443a-a131-65cbe73fc478",
            "queryResult": {
                "queryText": "J'aime bien",
                "action": "RateGame.SetGameRate",
                "parameters": {
                    "Rating": "J'aime"
                },
                "allRequiredParamsPresent": true,
                "fulfillmentMessages": [
                    {
                        "text": {
                            "text": [
                                ""
                            ]
                        }
                    }
                ],
                "outputContexts": [
                    {
                        "name": "projects/neogeoplayers-bot/agent/sessions/4b0dc12c-505f-43c2-b750-5c7987ebd1d7/contexts/game",
                        "lifespanCount": 4,
                        "parameters": {
                            "name.original": "julien",
                            "name": "Raguy",
                            "username.original": "",
                            "username": "julien"
                        }
                    },
                    {
                        "name": "projects/neogeoplayers-bot/agent/sessions/4b0dc12c-505f-43c2-b750-5c7987ebd1d7/contexts/rategame-followup",
                        "lifespanCount": 1
                    },
                    {
                        "name": "projects/neogeoplayers-bot/agent/sessions/4b0dc12c-505f-43c2-b750-5c7987ebd1d7/contexts/user",
                        "lifespanCount": 4,
                        "parameters": {
                            "name.original": "julien",
                            "name": "julien",
                            "username.original": "",
                            "username": "julien"
                        }
                    }
                ],
                "intent": {
                    "name": "projects/neogeoplayers-bot/agent/intents/c5503109-43ae-436b-a0ec-48642ba75126",
                    "displayName": "SetGameRate"
                },
                "intentDetectionConfidence": 1,
                "diagnosticInfo": {},
                "languageCode": "fr"
            },
            "originalDetectIntentRequest": {
                "payload": {}
            },
            "session": "projects/neogeoplayers-bot/agent/sessions/4b0dc12c-505f-43c2-b750-5c7987ebd1d7"
        })
        .build();

        // When
        return handler(agent)
        .then(() => {
            assert.deepEqual(`Ok julien tu aimes Raguy`, agent.responseMessages_[0].text);
        });
    });

});