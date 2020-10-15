function invokeLambda(client, name, payload) {
  return client
    .invoke({ FunctionName: name, Payload: JSON.stringify(payload) })
    .promise()
    .then((response) => {
      return JSON.parse(response.Payload);
    });
}

module.exports = { invokeLambda };
