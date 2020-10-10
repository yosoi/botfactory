/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_EXECUTEBOTCOMMAND_NAME
	FUNCTION_EXECUTEGRAPHQLOPERATION_NAME
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
  // TODO: get list of bot commands from graphql using executegraphqloperation
  // TODO: parse event message and run appropriate command using executebotcommand
  // TODO: return response
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
};
