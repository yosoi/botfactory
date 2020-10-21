import React, { useState } from "react";

import Action from "bits/Action";
import Command from "bits/Command";
import Editor from "bits/Editor";
import Setting from "bits/Setting";
import View from "bits/View";
import { useParams } from "react-router-dom";

export default function EditBot() {
  const { botId } = useParams();

  // TODO: set bot when botId changes
  const [bot] = useState({ id: "", name: "Maester" });

  const actions = [
    {
      onSave: () => console.log("save"),
      onDelete: () => console.log("delete"),
    },
    {
      onSave: () => console.log("save"),
      onDelete: () => console.log("delete"),
    },
  ];

  const commands = [
    {
      onSave: () => console.log("save"),
      onDelete: () => console.log("delete"),
    },
    {
      onSave: () => console.log("save"),
      onDelete: () => console.log("delete"),
    },
  ];

  const settings = [
    {
      icon: "tag",
      onSave: () => console.log("save"),
      onDelete: () => console.log("delete"),
      placeholder: "Rename your bot...",
    },
    {
      icon: "chevron right",
      onSave: () => console.log("save"),
      onDelete: () => console.log("delete"),
      placeholder: "Change your bot's command prefix",
    },
    {
      icon: "key",
      onSave: () => console.log("save"),
      onDelete: () => console.log("delete"),
      placeholder: "Reset your bot's Discord token",
    },
  ];

  return (
    <View
      header={`Edit ${bot.name}`}
      subviews={[
        {
          content: "Commands",
          icon: "bullhorn",
          render: (
            <Editor
              filter={{ placeholder: "Filter your commands..." }}
              info={{
                content: (
                  <div>
                    <p>
                      Commands are made of three parts: your bot's{" "}
                      <strong>prefix</strong>, a <strong>trigger word</strong>,
                      and the <strong>action</strong> your command should
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
                render: (props) => {
                  return <Command {...props}></Command>;
                },
              }}
              pagination={[]}
            ></Editor>
          ),
          to: `/bot/${botId}/commands`,
        },
        {
          content: "Actions",
          icon: "lightning",
          render: (
            <Editor
              filter={{ placeholder: "Filter your actions..." }}
              info={{
                content: (
                  <div>
                    {" "}
                    <p>
                      You can use actions to connect your bot to other services,
                      like{" "}
                      <a href="" target="_blank">
                        Zapier
                      </a>
                      ,{" "}
                      <a href="" target="_blank">
                        IFTTT
                      </a>
                      , your own{" "}
                      <a href="" target="_blank">
                        custom APIs
                      </a>
                      , or any other HTTP endpoint.
                    </p>
                    <p>
                      It costs <strong>a penny</strong> each time one of your
                      actions is executed. Your bot can have an{" "}
                      <strong>unlimited</strong> number of actions.
                    </p>
                  </div>
                ),
                header: "Actions",
              }}
              items={{
                data: actions,
                render: (props) => <Action {...props}></Action>,
              }}
              pagination={[]}
            ></Editor>
          ),
          to: `/bot/${botId}/actions`,
        },
        {
          content: "Settings",
          icon: "cog",
          render: (
            <Editor
              action={{ icon: "", content: "" }}
              info={{
                content: <p>Update your bot's settings, or shut it down.</p>,
                header: "Settings",
              }}
              items={{
                data: settings,
                render: (props) => <Setting {...props}></Setting>,
              }}
            ></Editor>
          ),
          to: `/bot/${botId}/settings`,
        },
      ]}
    ></View>
  );
}
