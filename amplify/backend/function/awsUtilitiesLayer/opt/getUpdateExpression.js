function getUpdateExpression(command, data) {
  return `${command} ${Object.entries(data)
    .map(([key]) => `${key} = :${key}`)
    .join(", ")}`;
}

module.exports = { getUpdateExpression };
