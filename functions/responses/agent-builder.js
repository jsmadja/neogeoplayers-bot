const { WebhookClient } = require('dialogflow-fulfillment');

class AgentBuilder {

    withParameters(parameters) {
        this.parameters = parameters;
        return this;
    }

    build() {
        return new WebhookClient({
            request: {
                body: {
                    queryResult: {
                        queryText: 'qui habitent paris ?',
                        parameters: this.parameters,
                        allRequiredParamsPresent: true,
                        fulfillmentMessages: [{
                            text: {
                                text: []
                            }
                        }],
                        intent: {
                            name: 'projects/neogeoplayers-bot/agent/intents/abe46323-0679-4dd8-9ec4-93de42ea4ae4',
                            displayName: 'MemberLocation'
                        },
                        intentDetectionConfidence: 0.51,
                        diagnosticInfo: {},
                        languageCode: 'fr'
                    },
                    responseId: '84471359-dd06-4b16-9c15-8be1c5723eba',
                    originalDetectIntentRequest: {
                        payload: {}
                    },
                    session: 'projects/neogeoplayers-bot/agent/sessions/4b0dc12c-505f-43c2-b750-5c7987ebd1d7'
                }
            },
            response: {
                json: () => {
                }
            }
        });
    }
}

module.exports = AgentBuilder;