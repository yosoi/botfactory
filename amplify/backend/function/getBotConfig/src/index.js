/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_EXECUTEGRAPHQLOPERATION_NAME
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
  // TODO: get bot token and prefix from graphql using instanceId provided in event
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify({ prefix: "", token: "" }),
  };
};
