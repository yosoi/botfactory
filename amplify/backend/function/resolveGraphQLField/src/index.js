/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_GETINSTANCESTATE_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const { getEnvData, invokeLambda } = require("/opt/utils.js");

const GET_INSTANCE_STATE = getEnvData(
  process.env,
  "FUNCTION_GETINSTANCESTATE_NAME"
);

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

function getInstanceState(instanceId) {
  return invokeLambda(lambda, GET_INSTANCE_STATE, instanceId);
}
