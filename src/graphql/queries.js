/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBot = /* GraphQL */ `
  query GetBot($id: ID!) {
    getBot(id: $id) {
      id
      name
      token
      instanceId
      instanceState
      prefix
      createdAt
      updatedAt
    }
  }
`;
export const listBots = /* GraphQL */ `
  query ListBots(
    $filter: ModelBotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        token
        instanceId
        instanceState
        prefix
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const botsByInstanceId = /* GraphQL */ `
  query BotsByInstanceId(
    $instanceId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelBotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    botsByInstanceId(
      instanceId: $instanceId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        token
        instanceId
        instanceState
        prefix
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
