/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_EXECUTEGRAPHQLOPERATION_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const { getEnvData } = require("/opt/getEnvData.js");
const { invokeLambda } = require("/opt/invokeLambda.js");

const GRAPHQL_OPERATION = getEnvData(
  process.env,
  "FUNCTION_EXECUTEGRAPHQLOPERATION_NAME"
);

const lambda = new AWS.Lambda();

exports.handler = async (event) => {
  console.log(event);
  const command = await getCommand(event.botId, event.trigger);
  console.log(command);
  // TODO: execute command
  // TODO: return null if unable to find command
  return "boop";
};

function getCommand(botId, trigger) {
  return invokeLambda(lambda, GRAPHQL_OPERATION, {
    operation: `query CommandsByBotIdByTrigger(
      $botId: ID
      $trigger: ModelStringKeyConditionInput
    ) {
      commandsByBotIdByTrigger(
        botId: $botId
        trigger: $trigger
      ) {
        items {
          action {
            url
            method
            requestTransform {
              template
            }
            responseTransform {
              template
            }
            actionHeaders {
              items {
                header {
                  key
                  value
                }
              }
            }
          }
        }
      }
    }`,
    operationName: "CommandsByBotIdByTrigger",
    item: { botId: botId, trigger: { eq: trigger } },
  }).then((response) => {
    console.log(response);
    return response.data.commandByIdByTrigger.items[0];
  });
}
