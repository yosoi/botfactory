exports.handler = async (event) => {
  // TODO: get bot name from discord api using clientId from event
  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
};
