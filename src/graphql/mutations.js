/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBot = /* GraphQL */ `
  mutation CreateBot(
    $input: CreateBotInput!
    $condition: ModelBotConditionInput
  ) {
    createBot(input: $input, condition: $condition) {
      id
      label
      token
      instanceId
      instanceState
      prefix
      createdAt
      updatedAt
      commands {
        items {
          id
          botId
          trigger
          actionId
          createdAt
          updatedAt
          bot {
            id
            label
            token
            instanceId
            instanceState
            prefix
            createdAt
            updatedAt
            commands {
              items {
                id
                botId
                trigger
                actionId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
          action {
            id
            label
            url
            method
            requestTransformId
            responseTransformId
            createdAt
            updatedAt
            requestTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            responseTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            owner
            actionHeaders {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const createDataTransform = /* GraphQL */ `
  mutation CreateDataTransform(
    $input: CreateDataTransformInput!
    $condition: ModelDataTransformConditionInput
  ) {
    createDataTransform(input: $input, condition: $condition) {
      id
      label
      inputType
      outputType
      template
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
      label
      token
      instanceId
      instanceState
      prefix
      createdAt
      updatedAt
      commands {
        items {
          id
          botId
          trigger
          actionId
          createdAt
          updatedAt
          bot {
            id
            label
            token
            instanceId
            instanceState
            prefix
            createdAt
            updatedAt
            commands {
              items {
                id
                botId
                trigger
                actionId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
          action {
            id
            label
            url
            method
            requestTransformId
            responseTransformId
            createdAt
            updatedAt
            requestTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            responseTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            owner
            actionHeaders {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteDataTransform = /* GraphQL */ `
  mutation DeleteDataTransform(
    $input: DeleteDataTransformInput!
    $condition: ModelDataTransformConditionInput
  ) {
    deleteDataTransform(input: $input, condition: $condition) {
      id
      label
      inputType
      outputType
      template
      createdAt
      updatedAt
    }
  }
`;
export const updateBot = /* GraphQL */ `
  mutation UpdateBot($input: UpdateBotInput!) {
    updateBot(input: $input) {
      id
      label
      token
      instanceId
      instanceState
      prefix
      createdAt
      updatedAt
      commands {
        items {
          id
          botId
          trigger
          actionId
          createdAt
          updatedAt
          bot {
            id
            label
            token
            instanceId
            instanceState
            prefix
            createdAt
            updatedAt
            commands {
              items {
                id
                botId
                trigger
                actionId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
          action {
            id
            label
            url
            method
            requestTransformId
            responseTransformId
            createdAt
            updatedAt
            requestTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            responseTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            owner
            actionHeaders {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const createCommand = /* GraphQL */ `
  mutation CreateCommand(
    $input: CreateCommandInput!
    $condition: ModelCommandConditionInput
  ) {
    createCommand(input: $input, condition: $condition) {
      id
      botId
      trigger
      actionId
      createdAt
      updatedAt
      bot {
        id
        label
        token
        instanceId
        instanceState
        prefix
        createdAt
        updatedAt
        commands {
          items {
            id
            botId
            trigger
            actionId
            createdAt
            updatedAt
            bot {
              id
              label
              token
              instanceId
              instanceState
              prefix
              createdAt
              updatedAt
              commands {
                nextToken
              }
            }
            owner
            action {
              id
              label
              url
              method
              requestTransformId
              responseTransformId
              createdAt
              updatedAt
              requestTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              responseTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              owner
              actionHeaders {
                nextToken
              }
            }
          }
          nextToken
        }
      }
      owner
      action {
        id
        label
        url
        method
        requestTransformId
        responseTransformId
        createdAt
        updatedAt
        requestTransform {
          id
          label
          inputType
          outputType
          template
          createdAt
          updatedAt
        }
        responseTransform {
          id
          label
          inputType
          outputType
          template
          createdAt
          updatedAt
        }
        owner
        actionHeaders {
          items {
            id
            actionId
            headerId
            createdAt
            updatedAt
            action {
              id
              label
              url
              method
              requestTransformId
              responseTransformId
              createdAt
              updatedAt
              requestTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              responseTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              owner
              actionHeaders {
                nextToken
              }
            }
            owner
            header {
              id
              label
              key
              value
              sensitive
              createdAt
              updatedAt
              headerActions {
                nextToken
              }
              owner
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const updateCommand = /* GraphQL */ `
  mutation UpdateCommand(
    $input: UpdateCommandInput!
    $condition: ModelCommandConditionInput
  ) {
    updateCommand(input: $input, condition: $condition) {
      id
      botId
      trigger
      actionId
      createdAt
      updatedAt
      bot {
        id
        label
        token
        instanceId
        instanceState
        prefix
        createdAt
        updatedAt
        commands {
          items {
            id
            botId
            trigger
            actionId
            createdAt
            updatedAt
            bot {
              id
              label
              token
              instanceId
              instanceState
              prefix
              createdAt
              updatedAt
              commands {
                nextToken
              }
            }
            owner
            action {
              id
              label
              url
              method
              requestTransformId
              responseTransformId
              createdAt
              updatedAt
              requestTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              responseTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              owner
              actionHeaders {
                nextToken
              }
            }
          }
          nextToken
        }
      }
      owner
      action {
        id
        label
        url
        method
        requestTransformId
        responseTransformId
        createdAt
        updatedAt
        requestTransform {
          id
          label
          inputType
          outputType
          template
          createdAt
          updatedAt
        }
        responseTransform {
          id
          label
          inputType
          outputType
          template
          createdAt
          updatedAt
        }
        owner
        actionHeaders {
          items {
            id
            actionId
            headerId
            createdAt
            updatedAt
            action {
              id
              label
              url
              method
              requestTransformId
              responseTransformId
              createdAt
              updatedAt
              requestTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              responseTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              owner
              actionHeaders {
                nextToken
              }
            }
            owner
            header {
              id
              label
              key
              value
              sensitive
              createdAt
              updatedAt
              headerActions {
                nextToken
              }
              owner
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const deleteCommand = /* GraphQL */ `
  mutation DeleteCommand(
    $input: DeleteCommandInput!
    $condition: ModelCommandConditionInput
  ) {
    deleteCommand(input: $input, condition: $condition) {
      id
      botId
      trigger
      actionId
      createdAt
      updatedAt
      bot {
        id
        label
        token
        instanceId
        instanceState
        prefix
        createdAt
        updatedAt
        commands {
          items {
            id
            botId
            trigger
            actionId
            createdAt
            updatedAt
            bot {
              id
              label
              token
              instanceId
              instanceState
              prefix
              createdAt
              updatedAt
              commands {
                nextToken
              }
            }
            owner
            action {
              id
              label
              url
              method
              requestTransformId
              responseTransformId
              createdAt
              updatedAt
              requestTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              responseTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              owner
              actionHeaders {
                nextToken
              }
            }
          }
          nextToken
        }
      }
      owner
      action {
        id
        label
        url
        method
        requestTransformId
        responseTransformId
        createdAt
        updatedAt
        requestTransform {
          id
          label
          inputType
          outputType
          template
          createdAt
          updatedAt
        }
        responseTransform {
          id
          label
          inputType
          outputType
          template
          createdAt
          updatedAt
        }
        owner
        actionHeaders {
          items {
            id
            actionId
            headerId
            createdAt
            updatedAt
            action {
              id
              label
              url
              method
              requestTransformId
              responseTransformId
              createdAt
              updatedAt
              requestTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              responseTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              owner
              actionHeaders {
                nextToken
              }
            }
            owner
            header {
              id
              label
              key
              value
              sensitive
              createdAt
              updatedAt
              headerActions {
                nextToken
              }
              owner
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const createHttpAction = /* GraphQL */ `
  mutation CreateHttpAction(
    $input: CreateHttpActionInput!
    $condition: ModelHttpActionConditionInput
  ) {
    createHttpAction(input: $input, condition: $condition) {
      id
      label
      url
      method
      requestTransformId
      responseTransformId
      createdAt
      updatedAt
      requestTransform {
        id
        label
        inputType
        outputType
        template
        createdAt
        updatedAt
      }
      responseTransform {
        id
        label
        inputType
        outputType
        template
        createdAt
        updatedAt
      }
      owner
      actionHeaders {
        items {
          id
          actionId
          headerId
          createdAt
          updatedAt
          action {
            id
            label
            url
            method
            requestTransformId
            responseTransformId
            createdAt
            updatedAt
            requestTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            responseTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            owner
            actionHeaders {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
          header {
            id
            label
            key
            value
            sensitive
            createdAt
            updatedAt
            headerActions {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            owner
          }
        }
        nextToken
      }
    }
  }
`;
export const updateHttpAction = /* GraphQL */ `
  mutation UpdateHttpAction(
    $input: UpdateHttpActionInput!
    $condition: ModelHttpActionConditionInput
  ) {
    updateHttpAction(input: $input, condition: $condition) {
      id
      label
      url
      method
      requestTransformId
      responseTransformId
      createdAt
      updatedAt
      requestTransform {
        id
        label
        inputType
        outputType
        template
        createdAt
        updatedAt
      }
      responseTransform {
        id
        label
        inputType
        outputType
        template
        createdAt
        updatedAt
      }
      owner
      actionHeaders {
        items {
          id
          actionId
          headerId
          createdAt
          updatedAt
          action {
            id
            label
            url
            method
            requestTransformId
            responseTransformId
            createdAt
            updatedAt
            requestTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            responseTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            owner
            actionHeaders {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
          header {
            id
            label
            key
            value
            sensitive
            createdAt
            updatedAt
            headerActions {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            owner
          }
        }
        nextToken
      }
    }
  }
`;
export const deleteHttpAction = /* GraphQL */ `
  mutation DeleteHttpAction(
    $input: DeleteHttpActionInput!
    $condition: ModelHttpActionConditionInput
  ) {
    deleteHttpAction(input: $input, condition: $condition) {
      id
      label
      url
      method
      requestTransformId
      responseTransformId
      createdAt
      updatedAt
      requestTransform {
        id
        label
        inputType
        outputType
        template
        createdAt
        updatedAt
      }
      responseTransform {
        id
        label
        inputType
        outputType
        template
        createdAt
        updatedAt
      }
      owner
      actionHeaders {
        items {
          id
          actionId
          headerId
          createdAt
          updatedAt
          action {
            id
            label
            url
            method
            requestTransformId
            responseTransformId
            createdAt
            updatedAt
            requestTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            responseTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            owner
            actionHeaders {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
          header {
            id
            label
            key
            value
            sensitive
            createdAt
            updatedAt
            headerActions {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            owner
          }
        }
        nextToken
      }
    }
  }
`;
export const createHttpActionRequestHeader = /* GraphQL */ `
  mutation CreateHttpActionRequestHeader(
    $input: CreateHttpActionRequestHeaderInput!
    $condition: ModelHttpActionRequestHeaderConditionInput
  ) {
    createHttpActionRequestHeader(input: $input, condition: $condition) {
      id
      actionId
      headerId
      createdAt
      updatedAt
      action {
        id
        label
        url
        method
        requestTransformId
        responseTransformId
        createdAt
        updatedAt
        requestTransform {
          id
          label
          inputType
          outputType
          template
          createdAt
          updatedAt
        }
        responseTransform {
          id
          label
          inputType
          outputType
          template
          createdAt
          updatedAt
        }
        owner
        actionHeaders {
          items {
            id
            actionId
            headerId
            createdAt
            updatedAt
            action {
              id
              label
              url
              method
              requestTransformId
              responseTransformId
              createdAt
              updatedAt
              requestTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              responseTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              owner
              actionHeaders {
                nextToken
              }
            }
            owner
            header {
              id
              label
              key
              value
              sensitive
              createdAt
              updatedAt
              headerActions {
                nextToken
              }
              owner
            }
          }
          nextToken
        }
      }
      owner
      header {
        id
        label
        key
        value
        sensitive
        createdAt
        updatedAt
        headerActions {
          items {
            id
            actionId
            headerId
            createdAt
            updatedAt
            action {
              id
              label
              url
              method
              requestTransformId
              responseTransformId
              createdAt
              updatedAt
              requestTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              responseTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              owner
              actionHeaders {
                nextToken
              }
            }
            owner
            header {
              id
              label
              key
              value
              sensitive
              createdAt
              updatedAt
              headerActions {
                nextToken
              }
              owner
            }
          }
          nextToken
        }
        owner
      }
    }
  }
`;
export const updateHttpActionRequestHeader = /* GraphQL */ `
  mutation UpdateHttpActionRequestHeader(
    $input: UpdateHttpActionRequestHeaderInput!
    $condition: ModelHttpActionRequestHeaderConditionInput
  ) {
    updateHttpActionRequestHeader(input: $input, condition: $condition) {
      id
      actionId
      headerId
      createdAt
      updatedAt
      action {
        id
        label
        url
        method
        requestTransformId
        responseTransformId
        createdAt
        updatedAt
        requestTransform {
          id
          label
          inputType
          outputType
          template
          createdAt
          updatedAt
        }
        responseTransform {
          id
          label
          inputType
          outputType
          template
          createdAt
          updatedAt
        }
        owner
        actionHeaders {
          items {
            id
            actionId
            headerId
            createdAt
            updatedAt
            action {
              id
              label
              url
              method
              requestTransformId
              responseTransformId
              createdAt
              updatedAt
              requestTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              responseTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              owner
              actionHeaders {
                nextToken
              }
            }
            owner
            header {
              id
              label
              key
              value
              sensitive
              createdAt
              updatedAt
              headerActions {
                nextToken
              }
              owner
            }
          }
          nextToken
        }
      }
      owner
      header {
        id
        label
        key
        value
        sensitive
        createdAt
        updatedAt
        headerActions {
          items {
            id
            actionId
            headerId
            createdAt
            updatedAt
            action {
              id
              label
              url
              method
              requestTransformId
              responseTransformId
              createdAt
              updatedAt
              requestTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              responseTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              owner
              actionHeaders {
                nextToken
              }
            }
            owner
            header {
              id
              label
              key
              value
              sensitive
              createdAt
              updatedAt
              headerActions {
                nextToken
              }
              owner
            }
          }
          nextToken
        }
        owner
      }
    }
  }
`;
export const deleteHttpActionRequestHeader = /* GraphQL */ `
  mutation DeleteHttpActionRequestHeader(
    $input: DeleteHttpActionRequestHeaderInput!
    $condition: ModelHttpActionRequestHeaderConditionInput
  ) {
    deleteHttpActionRequestHeader(input: $input, condition: $condition) {
      id
      actionId
      headerId
      createdAt
      updatedAt
      action {
        id
        label
        url
        method
        requestTransformId
        responseTransformId
        createdAt
        updatedAt
        requestTransform {
          id
          label
          inputType
          outputType
          template
          createdAt
          updatedAt
        }
        responseTransform {
          id
          label
          inputType
          outputType
          template
          createdAt
          updatedAt
        }
        owner
        actionHeaders {
          items {
            id
            actionId
            headerId
            createdAt
            updatedAt
            action {
              id
              label
              url
              method
              requestTransformId
              responseTransformId
              createdAt
              updatedAt
              requestTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              responseTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              owner
              actionHeaders {
                nextToken
              }
            }
            owner
            header {
              id
              label
              key
              value
              sensitive
              createdAt
              updatedAt
              headerActions {
                nextToken
              }
              owner
            }
          }
          nextToken
        }
      }
      owner
      header {
        id
        label
        key
        value
        sensitive
        createdAt
        updatedAt
        headerActions {
          items {
            id
            actionId
            headerId
            createdAt
            updatedAt
            action {
              id
              label
              url
              method
              requestTransformId
              responseTransformId
              createdAt
              updatedAt
              requestTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              responseTransform {
                id
                label
                inputType
                outputType
                template
                createdAt
                updatedAt
              }
              owner
              actionHeaders {
                nextToken
              }
            }
            owner
            header {
              id
              label
              key
              value
              sensitive
              createdAt
              updatedAt
              headerActions {
                nextToken
              }
              owner
            }
          }
          nextToken
        }
        owner
      }
    }
  }
`;
export const createHttpRequestHeader = /* GraphQL */ `
  mutation CreateHttpRequestHeader(
    $input: CreateHttpRequestHeaderInput!
    $condition: ModelHttpRequestHeaderConditionInput
  ) {
    createHttpRequestHeader(input: $input, condition: $condition) {
      id
      label
      key
      value
      sensitive
      createdAt
      updatedAt
      headerActions {
        items {
          id
          actionId
          headerId
          createdAt
          updatedAt
          action {
            id
            label
            url
            method
            requestTransformId
            responseTransformId
            createdAt
            updatedAt
            requestTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            responseTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            owner
            actionHeaders {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
          header {
            id
            label
            key
            value
            sensitive
            createdAt
            updatedAt
            headerActions {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            owner
          }
        }
        nextToken
      }
      owner
    }
  }
`;
export const updateHttpRequestHeader = /* GraphQL */ `
  mutation UpdateHttpRequestHeader(
    $input: UpdateHttpRequestHeaderInput!
    $condition: ModelHttpRequestHeaderConditionInput
  ) {
    updateHttpRequestHeader(input: $input, condition: $condition) {
      id
      label
      key
      value
      sensitive
      createdAt
      updatedAt
      headerActions {
        items {
          id
          actionId
          headerId
          createdAt
          updatedAt
          action {
            id
            label
            url
            method
            requestTransformId
            responseTransformId
            createdAt
            updatedAt
            requestTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            responseTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            owner
            actionHeaders {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
          header {
            id
            label
            key
            value
            sensitive
            createdAt
            updatedAt
            headerActions {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            owner
          }
        }
        nextToken
      }
      owner
    }
  }
`;
export const deleteHttpRequestHeader = /* GraphQL */ `
  mutation DeleteHttpRequestHeader(
    $input: DeleteHttpRequestHeaderInput!
    $condition: ModelHttpRequestHeaderConditionInput
  ) {
    deleteHttpRequestHeader(input: $input, condition: $condition) {
      id
      label
      key
      value
      sensitive
      createdAt
      updatedAt
      headerActions {
        items {
          id
          actionId
          headerId
          createdAt
          updatedAt
          action {
            id
            label
            url
            method
            requestTransformId
            responseTransformId
            createdAt
            updatedAt
            requestTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            responseTransform {
              id
              label
              inputType
              outputType
              template
              createdAt
              updatedAt
            }
            owner
            actionHeaders {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
          }
          owner
          header {
            id
            label
            key
            value
            sensitive
            createdAt
            updatedAt
            headerActions {
              items {
                id
                actionId
                headerId
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            owner
          }
        }
        nextToken
      }
      owner
    }
  }
`;
