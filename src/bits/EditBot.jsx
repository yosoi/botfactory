import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";

import { BotProvider } from "bits/BotContext";
import Command from "bits/Command";
import Editor from "bits/Editor";
import Setting from "bits/Setting";
import View from "bits/View";
import { useParams } from "react-router-dom";

export default function EditBot() {
  const { botId } = useParams();
  const [bot, setBot] = useState();

  useEffect(() => {
    API.graphql(
      graphqlOperation(
        /* GraphQL */ `
          query GetBot($id: ID!) {
            getBot(id: $id) {
              id
              label
              prefix
              commands {
                items {
                  id
                  trigger
                  action {
                    id
                    label
                  }
                }
                nextToken
              }
            }
          }
        `,
        { id: botId }
      )
    ).then((response) => {
      setBot(response.data.getBot);
    });

    const botUpdates = API.graphql(
      graphqlOperation(/* GraphQL */ `
        subscription OnUpdateBot {
          onUpdateBot {
            id
            label
            prefix
            commands {
              items {
                id
                trigger
                action {
                  id
                  label
                }
              }
              nextToken
            }
          }
        }
      `)
    ).subscribe({
      next: (update) => {
        const data = update.value.data.onUpdateBot;
        if (data.id === botId) {
          setBot(data);
        }
      },
    });

    return () => botUpdates.unsubscribe();
  }, [botId]);

  // TODO: create commands list from bot.commands when bot.commands changes
  const commands = [
    {
      key: "1",
      onSave: () => console.log("save"),
      onDelete: () => console.log("delete"),
    },
    {
      key: "2",
      onSave: () => console.log("save"),
      onDelete: () => console.log("delete"),
    },
  ];

  function updateBot(botId, data) {
    return API.graphql(
      graphqlOperation(
        /* GraphQL */ `
          mutation UpdateBot($input: UpdateBotInput!) {
            updateBot(input: $input) {
              id
              label
              prefix
            }
          }
        `,
        { input: { id: botId, ...data } }
      )
    );
  }

  const settings = [
    {
      icon: "tag",
      key: "label",
      placeholder: "Rename your bot...",
    },
    {
      icon: "chevron right",
      key: "prefix",
      placeholder: "Change your bot's command prefix",
    },
    {
      icon: "key",
      key: "token",
      placeholder: "Reset your bot's Discord token",
    },
  ];

  return (
    <BotProvider value={bot}>
      <View
        header={bot?.label}
        subviews={[
          {
            content: "Commands",
            icon: "bullhorn",
            key: "commands",
            render: (
              <Editor
                filter={{ placeholder: "Filter your commands..." }}
                info={{
                  content: (
                    <div>
                      <p>
                        Commands are made of three parts: your bot's{" "}
                        <strong>prefix</strong>, a <strong>trigger word</strong>
                        , and the <strong>action</strong> your command should
                        execute.
                      </p>
                      <p>
                        Commands are free. Your bot can have an{" "}
                        <strong>unlimited</strong> number of commands.
                      </p>
                    </div>
                  ),
                  header: "Commands",
                }}
                items={{
                  data: commands,
                  key: "commands",
                  render: (props) => {
                    return <Command {...props}></Command>;
                  },
                }}
                key="commands"
                pagination={[]}
              ></Editor>
            ),
            to: `/bot/${botId}/commands`,
          },

          {
            content: "Settings",
            icon: "cog",
            key: "settings",
            render: (
              <Editor
                action={{ icon: "", content: "" }}
                info={{
                  content: <p>Update your bot's settings, or shut it down.</p>,
                  header: "Settings",
                }}
                items={{
                  data: settings,
                  key: "settings",
                  render: (props) => (
                    <Setting
                      onSave={(value) => {
                        const data = {};
                        data[props.key] = value;
                        return updateBot(botId, data);
                      }}
                      {...props}
                    ></Setting>
                  ),
                }}
                key="settings"
              ></Editor>
            ),
            to: `/bot/${botId}/settings`,
          },
        ]}
      ></View>
    </BotProvider>
  );
}
