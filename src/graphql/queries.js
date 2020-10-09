/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBot = /* GraphQL */ `
  query GetBot($id: ID!) {
    getBot(id: $id) {
      id
      name
      clientId
      clientSecret
      token
      createdAt
      updatedAt
      owner
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
        clientId
        clientSecret
        token
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
