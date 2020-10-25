import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";

import Action from "bits/Action";
import { BotProvider } from "bits/BotContext";
import Command from "bits/Command";
import Editor from "bits/Editor";
import Setting from "bits/Setting";
import View from "bits/View";
import { getBot } from "graphql/queries";
import { useParams } from "react-router-dom";

export default function EditBot() {
  const { botId } = useParams();
  const [bot, setBot] = useState({
    id: "maester",
    name: "Maester",
    path: "/bot/maester",
    text: "maester",
  });

  useEffect(() => {
    // TODO: get bot from graphql api using botId
    // TODO: setBot accordingly
  }, [botId]);

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

  const settings = [
    {
      icon: "tag",
      key: "rename",
      onSave: () => console.log("save"),
      onDelete: () => console.log("delete"),
      placeholder: "Rename your bot...",
    },
    {
      icon: "chevron right",
      key: "prefix",
      onSave: () => console.log("save"),
      onDelete: () => console.log("delete"),
      placeholder: "Change your bot's command prefix",
    },
    {
      icon: "key",
      key: "token",
      onSave: () => console.log("save"),
      onDelete: () => console.log("delete"),
      placeholder: "Reset your bot's Discord token",
    },
  ];

  return (
    <BotProvider value={bot}>
      <View
        header={`${bot.name}`}
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
                  render: (props) => <Setting {...props}></Setting>,
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
