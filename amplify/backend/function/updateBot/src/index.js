/* Amplify Params - DO NOT EDIT
	API_BOTFACTORY_BOTTABLE_ARN
	API_BOTFACTORY_BOTTABLE_NAME
	API_BOTFACTORY_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const { getEnvData } = require("/opt/getEnvData.js");
const {
  getExpressionAttributeValues,
} = require("/opt/getExpressionAttributeValues.js");
const { getUpdateExpression } = require("/opt/getUpdateExpression.js");
const { updateRecord } = require("/opt/updateRecord.js");

const BOT_TABLE = getEnvData(process.env, "API_BOTFACTORY_BOTTABLE_NAME");

const documentClient = new AWS.DynamoDB.DocumentClient();
const lambda = new AWS.Lambda();

exports.handler = async (event) => {
  console.log(event);
  const botId = event.arguments.input.id;
  const input = { ...event.arguments.input, updatedAt: event.timestamp };
  delete input.id;
  const updateExpression = getUpdateExpression("set", input);
  const expressionAttributeValues = getExpressionAttributeValues(input);
  const updatedRecord = await updateRecord(
    documentClient,
    BOT_TABLE,
    {
      id: botId,
    },
    updateExpression,
    expressionAttributeValues,
    "ALL_NEW"
  );
  return updatedRecord.Attributes;
};
