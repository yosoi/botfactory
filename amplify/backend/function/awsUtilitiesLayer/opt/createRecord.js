function createRecord(client, tableName, record) {
  return client
    .put({
      TableName: tableName,
      Item: record,
    })
    .promise();
}

module.exports = { createRecord };
