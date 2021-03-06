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
  return invokeLambda(lambda, GRAPHQL_OPERATION, {
    operation: `query BotsByInstanceId(
      $instanceId: ID
    ) {
      botsByInstanceId(
        instanceId: $instanceId
      ) {
        items {
          token
          prefix
        }
      }
    }`,
    operationName: "BotsByInstanceId",
    item: { instanceId: event.pathParameters.id },
  }).then((response) => {
    const config = response.data.botsByInstanceId.items[0];
    const data = config ? config : { token: null, prefix: null };
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    };
  });
};
