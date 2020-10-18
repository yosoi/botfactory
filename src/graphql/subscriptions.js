/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBot = /* GraphQL */ `
  subscription OnCreateBot($id: ID) {
    onCreateBot(id: $id) {
      id
      name
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
  }
`;
export const onCreateDataTransform = /* GraphQL */ `
  subscription OnCreateDataTransform($id: ID!) {
    onCreateDataTransform(id: $id) {
      id
      name
      template
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBot = /* GraphQL */ `
  subscription OnDeleteBot($id: ID) {
    onDeleteBot(id: $id) {
      id
      name
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
  }
`;
export const onDeleteDataTransform = /* GraphQL */ `
  subscription OnDeleteDataTransform($id: ID!) {
    onDeleteDataTransform(id: $id) {
      id
      name
      template
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCommand = /* GraphQL */ `
  subscription OnCreateCommand($owner: String) {
    onCreateCommand(owner: $owner) {
      id
      botId
      trigger
      actionId
      createdAt
      updatedAt
      bot {
        id
        name
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
        url
        method
        requestTransformId
        responseTransformId
        createdAt
        updatedAt
        requestTransform {
          id
          name
          template
          createdAt
          updatedAt
        }
        responseTransform {
          id
          name
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
  }
`;
export const onUpdateCommand = /* GraphQL */ `
  subscription OnUpdateCommand($owner: String) {
    onUpdateCommand(owner: $owner) {
      id
      botId
      trigger
      actionId
      createdAt
      updatedAt
      bot {
        id
        name
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
        url
        method
        requestTransformId
        responseTransformId
        createdAt
        updatedAt
        requestTransform {
          id
          name
          template
          createdAt
          updatedAt
        }
        responseTransform {
          id
          name
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
  }
`;
export const onDeleteCommand = /* GraphQL */ `
  subscription OnDeleteCommand($owner: String) {
    onDeleteCommand(owner: $owner) {
      id
      botId
      trigger
      actionId
      createdAt
      updatedAt
      bot {
        id
        name
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
        url
        method
        requestTransformId
        responseTransformId
        createdAt
        updatedAt
        requestTransform {
          id
          name
          template
          createdAt
          updatedAt
        }
        responseTransform {
          id
          name
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
  }
`;
export const onCreateHttpAction = /* GraphQL */ `
  subscription OnCreateHttpAction($owner: String) {
    onCreateHttpAction(owner: $owner) {
      id
      url
      method
      requestTransformId
      responseTransformId
      createdAt
      updatedAt
      requestTransform {
        id
        name
        template
        createdAt
        updatedAt
      }
      responseTransform {
        id
        name
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
`;
export const onUpdateHttpAction = /* GraphQL */ `
  subscription OnUpdateHttpAction($owner: String) {
    onUpdateHttpAction(owner: $owner) {
      id
      url
      method
      requestTransformId
      responseTransformId
      createdAt
      updatedAt
      requestTransform {
        id
        name
        template
        createdAt
        updatedAt
      }
      responseTransform {
        id
        name
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
`;
export const onDeleteHttpAction = /* GraphQL */ `
  subscription OnDeleteHttpAction($owner: String) {
    onDeleteHttpAction(owner: $owner) {
      id
      url
      method
      requestTransformId
      responseTransformId
      createdAt
      updatedAt
      requestTransform {
        id
        name
        template
        createdAt
        updatedAt
      }
      responseTransform {
        id
        name
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
`;
export const onCreateHttpActionRequestHeader = /* GraphQL */ `
  subscription OnCreateHttpActionRequestHeader($owner: String) {
    onCreateHttpActionRequestHeader(owner: $owner) {
      id
      actionId
      headerId
      createdAt
      updatedAt
      action {
        id
        url
        method
        requestTransformId
        responseTransformId
        createdAt
        updatedAt
        requestTransform {
          id
          name
          template
          createdAt
          updatedAt
        }
        responseTransform {
          id
          name
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
        key
        value
        createdAt
        updatedAt
        headerActions {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onUpdateHttpActionRequestHeader = /* GraphQL */ `
  subscription OnUpdateHttpActionRequestHeader($owner: String) {
    onUpdateHttpActionRequestHeader(owner: $owner) {
      id
      actionId
      headerId
      createdAt
      updatedAt
      action {
        id
        url
        method
        requestTransformId
        responseTransformId
        createdAt
        updatedAt
        requestTransform {
          id
          name
          template
          createdAt
          updatedAt
        }
        responseTransform {
          id
          name
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
        key
        value
        createdAt
        updatedAt
        headerActions {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onDeleteHttpActionRequestHeader = /* GraphQL */ `
  subscription OnDeleteHttpActionRequestHeader($owner: String) {
    onDeleteHttpActionRequestHeader(owner: $owner) {
      id
      actionId
      headerId
      createdAt
      updatedAt
      action {
        id
        url
        method
        requestTransformId
        responseTransformId
        createdAt
        updatedAt
        requestTransform {
          id
          name
          template
          createdAt
          updatedAt
        }
        responseTransform {
          id
          name
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
        key
        value
        createdAt
        updatedAt
        headerActions {
          nextToken
        }
        owner
      }
    }
  }
`;
export const onCreateHttpRequestHeader = /* GraphQL */ `
  subscription OnCreateHttpRequestHeader($owner: String) {
    onCreateHttpRequestHeader(owner: $owner) {
      id
      key
      value
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
`;
export const onUpdateHttpRequestHeader = /* GraphQL */ `
  subscription OnUpdateHttpRequestHeader($owner: String) {
    onUpdateHttpRequestHeader(owner: $owner) {
      id
      key
      value
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
`;
export const onDeleteHttpRequestHeader = /* GraphQL */ `
  subscription OnDeleteHttpRequestHeader($owner: String) {
    onDeleteHttpRequestHeader(owner: $owner) {
      id
      key
      value
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
`;
