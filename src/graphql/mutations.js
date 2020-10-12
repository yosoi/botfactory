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
      token
      instanceId
      instanceState
      prefix
      createdAt
      updatedAt
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
      token
      instanceId
      instanceState
      prefix
      createdAt
      updatedAt
    }
  }
`;
