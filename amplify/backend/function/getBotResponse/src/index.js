/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_EXECUTEBOTCOMMAND_NAME
	FUNCTION_EXECUTEGRAPHQLOPERATION_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const { getEnvData } = require("/opt/getEnvData.js");
const { invokeLambda } = require("/opt/invokeLambda.js");

const BOT_COMMAND = getEnvData(process.env, "FUNCTION_EXECUTEBOTCOMMAND_NAME");
const GRAPHQL_OPERATION = getEnvData(
  process.env,
  "FUNCTION_EXECUTEGRAPHQLOPERATION_NAME"
);

const lambda = new AWS.Lambda();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const commandTrigger = parseMessage(body.message.content, body.prefix);
  const instanceId = event.pathParameters.id;
  const botId = await getBotId(instanceId);
  return executeBotCommand(botId, commandTrigger, event.message).then(
    (response) => {
      console.log(response);
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(response),
      };
    }
  );
};

function executeBotCommand(botId, commandTrigger, message) {
  return invokeLambda(lambda, BOT_COMMAND, {
    botId: botId,
    commandTrigger: commandTrigger,
    message: message,
  });
}

function getBotId(instanceId) {
  return invokeLambda(lambda, GRAPHQL_OPERATION, {
    operation: `query BotsByInstanceId(
      $instanceId: ID
    ) {
      botsByInstanceId(
        instanceId: $instanceId
      ) {
        items {
          id
        }
      }
    }`,
    operationName: "BotsByInstanceId",
    item: { instanceId: instanceId },
  }).then((response) => {
    console.log(response);
    return response.data.botsByInstanceId.items[0].id;
  });
}

function parseMessage(message, prefix) {
  return message.split(" ")[0].substr(prefix.length);
}
