/* Amplify Params - DO NOT EDIT
	API_BOTFACTORY_BOTTABLE_ARN
	API_BOTFACTORY_BOTTABLE_NAME
	API_BOTFACTORY_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const BOT_TABLE = getEnvData(process.env, "API_BOTFACTORY_BOTTABLE_NAME");

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const instanceId = await createInstance();
  const record = {
    id: event.id,
    name: "Untitled",
    token: event.arguments.input.token,
    prefix: "!",
    instanceId: instanceId,
  };
  await createRecord(documentClient, record);
  return record;
};

function createInstance() {
  // TODO: runInstance and return instance id
  return "12345";
}

// TODO: extract to reusable layer
function createRecord(client, record) {
  return client
    .put({
      TableName: BOT_TABLE,
      Item: record,
    })
    .promise();
}

// TODO: extract to reusable layer
function getEnvData(environment, key) {
  const data = environment[key];
  if (data) {
    return data;
  }
  throw new Error(`Function requires environment variable: '${key}'`);
}
