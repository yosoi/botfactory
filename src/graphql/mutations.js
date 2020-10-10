/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBot = /* GraphQL */ `
  mutation CreateBot(
    $input: CreateBotInput!
    $condition: ModelBotConditionInput
  ) {
    createBot(input: $input, condition: $condition) {
      id
      name
      clientId
      clientSecret
      token
      instanceId
      instanceState
      prefix
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateBot = /* GraphQL */ `
  mutation UpdateBot(
    $input: UpdateBotInput!
    $condition: ModelBotConditionInput
  ) {
    updateBot(input: $input, condition: $condition) {
      id
      name
      clientId
      clientSecret
      token
      instanceId
      instanceState
      prefix
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteBot = /* GraphQL */ `
  mutation DeleteBot(
    $input: DeleteBotInput!
    $condition: ModelBotConditionInput
  ) {
    deleteBot(input: $input, condition: $condition) {
      id
      name
      clientId
      clientSecret
      token
      instanceId
      instanceState
      prefix
      createdAt
      updatedAt
      owner
    }
  }
`;
