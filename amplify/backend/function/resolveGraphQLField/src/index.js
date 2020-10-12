/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_GETINSTANCESTATE_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");

const GET_INSTANCE_STATE = getEnvData("FUNCTION_GETINSTANCESTATE_NAME");

const lambda = new AWS.Lambda();

exports.handler = async (event) => {
  const resolvers = {
    Bot: {
      instanceState: (event) => getInstanceState(event.source.instanceId),
    },
  };
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      return resolver(event);
    }
  }
  throw new Error("Resolver not found.");
};

function getEnvData(key) {
  const data = process.env[key];
  if (data) {
    return data;
  }
  throw new Error(`Function requires environment variable: '${key}'`);
}

function getInstanceState(instanceId) {
  return invokeLambda(lambda, GET_INSTANCE_STATE, instanceId);
}

// TODO: extract to reusable layer
function invokeLambda(client, name, payload) {
  return client
    .invoke({ FunctionName: name, Payload: JSON.stringify(payload) })
    .promise()
    .then((response) => {
      return JSON.parse(response);
    });
}
