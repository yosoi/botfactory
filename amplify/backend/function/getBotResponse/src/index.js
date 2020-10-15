/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_EXECUTEBOTCOMMAND_NAME
	FUNCTION_EXECUTEGRAPHQLOPERATION_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const { getEnvData, invokeLambda } = require("utils.js");

const BOT_COMMAND = getEnvData(process.env, "FUNCTION_EXECUTEBOTCOMMAND_NAME");

const lambda = new AWS.Lambda();

exports.handler = async (event) => {
  console.log(event);
  const commandTrigger = parseMessage(event.message, event.prefix);
  const instanceId = ""; // TODO: get instance id from event
  return executeBotCommand(instanceId, commandTrigger, event.message);
};

function executeBotCommand(instanceId, commandTrigger, message) {
  return invokeLambda(lambda, BOT_COMMAND, {
    instanceId: instanceId,
    commandTrigger: commandTrigger,
    message: message,
  });
}

function parseMessage(message, prefix) {
  // TODO: implement
  return "";
}
