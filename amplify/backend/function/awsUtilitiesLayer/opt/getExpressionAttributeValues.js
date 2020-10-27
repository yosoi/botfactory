function getExpressionAttributeValues(data) {
  const values = {};
  Object.entries(data).forEach(([key, value]) => {
    values[`:${key}`] = value;
  });
  return values;
}

module.exports = { getExpressionAttributeValues };
