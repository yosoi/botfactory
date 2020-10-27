/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const httpActionRequestHeadersByHttpActionId = /* GraphQL */ `
  query HttpActionRequestHeadersByHttpActionId(
    $actionId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelHttpActionRequestHeaderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    httpActionRequestHeadersByHttpActionId(
      actionId: $actionId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
              action {
                id
                label
                url
                method
                requestTransformId
                responseTransformId
                createdAt
                updatedAt
                owner
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
                owner
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
                owner
              }
            }
            nextToken
          }
          owner
        }
      }
      nextToken
    }
  }
`;
export const httpActionRequestHeadersByHttpRequestHeaderId = /* GraphQL */ `
  query HttpActionRequestHeadersByHttpRequestHeaderId(
    $headerId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelHttpActionRequestHeaderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    httpActionRequestHeadersByHttpRequestHeaderId(
      headerId: $headerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
              action {
                id
                label
                url
                method
                requestTransformId
                responseTransformId
                createdAt
                updatedAt
                owner
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
                owner
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
                owner
              }
            }
            nextToken
          }
          owner
        }
      }
      nextToken
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
      nextToken
    }
  }
`;
export const getBot = /* GraphQL */ `
  query GetBot($id: ID!) {
    getBot(id: $id) {
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
      nextToken
    }
  }
`;
export const getCommand = /* GraphQL */ `
  query GetCommand($id: ID!) {
    getCommand(id: $id) {
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
export const listCommands = /* GraphQL */ `
  query ListCommands(
    $filter: ModelCommandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommands(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              bot {
                id
                label
                token
                instanceId
                instanceState
                prefix
                createdAt
                updatedAt
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
                owner
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
                owner
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
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const commandsByBotId = /* GraphQL */ `
  query CommandsByBotId(
    $botId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCommandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commandsByBotId(
      botId: $botId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
              bot {
                id
                label
                token
                instanceId
                instanceState
                prefix
                createdAt
                updatedAt
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
                owner
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
                owner
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
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const commandsByBotIdByTrigger = /* GraphQL */ `
  query CommandsByBotIdByTrigger(
    $botId: ID
    $trigger: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commandsByBotIdByTrigger(
      botId: $botId
      trigger: $trigger
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
              bot {
                id
                label
                token
                instanceId
                instanceState
                prefix
                createdAt
                updatedAt
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
                owner
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
                owner
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
                owner
              }
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const listDataTransforms = /* GraphQL */ `
  query ListDataTransforms(
    $filter: ModelDataTransformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataTransforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        inputType
        outputType
        template
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDataTransform = /* GraphQL */ `
  query GetDataTransform($id: ID!) {
    getDataTransform(id: $id) {
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
export const listHttpActions = /* GraphQL */ `
  query ListHttpActions(
    $filter: ModelHttpActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHttpActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getHttpAction = /* GraphQL */ `
  query GetHttpAction($id: ID!) {
    getHttpAction(id: $id) {
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
export const listHttpRequestHeaders = /* GraphQL */ `
  query ListHttpRequestHeaders(
    $filter: ModelHttpRequestHeaderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHttpRequestHeaders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getHttpRequestHeader = /* GraphQL */ `
  query GetHttpRequestHeader($id: ID!) {
    getHttpRequestHeader(id: $id) {
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
