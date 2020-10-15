function getEnvData(environment, key) {
  const data = environment[key];
  if (data) {
    return data;
  }
  throw new Error(`Function requires environment variable: '${key}'`);
}

module.exports = { getEnvData };
