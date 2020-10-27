function updateRecord(
  client,
  tableName,
  key,
  updateExpression,
  expressionAttributeValues,
  returnValues
) {
  return client
    .update({
      ExpressionAttributeValues: expressionAttributeValues,
      Key: key,
      ReturnValues: returnValues,
      TableName: tableName,
      UpdateExpression: updateExpression,
    })
    .promise();
}

module.exports = { updateRecord };
