import Action from "bits/Action";
import Editor from "bits/Editor";
import Header from "bits/Header";
import React from "react";
import Transform from "bits/Transform";
import View from "bits/View";

export default function EditResources() {
  // TODO: get headers and transforms from API
  // TODO: subscribe to headers and transforms from API
  const actions = [
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
  const headers = [{ key: "012" }, { key: "234" }];
  const transforms = [{ key: "456" }, { key: "678" }];
  return (
    <View
      header="Shared"
      subviews={[
        {
          content: "Actions",
          icon: "lightning",
          key: "actions",
          render: (
            <Editor
              filter={{ placeholder: "Filter your actions..." }}
              info={{
                content: (
                  <div>
                    {" "}
                    <p>
                      You can use actions to connect your bots to other
                      services, like <a href="https://zapier.com/">Zapier</a>,{" "}
                      <a href="https://ifttt.com/">IFTTT</a>, your own{" "}
                      <a href="#docs/custom-api-guide">custom APIs</a>, or any
                      other HTTP endpoint.
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
                key: "actions",
                render: (props) => <Action {...props}></Action>,
              }}
              key="actions"
              pagination={[]}
            ></Editor>
          ),
          to: `/actions`,
        },
        {
          content: "Headers",
          icon: "code",
          key: "headers",
          render: (
            <Editor
              filter={{
                placeholder: "Filter your headers...",
                onClickAdd: () => {
                  console.log("add add header");
                },
              }}
              info={{
                content: (
                  <div>
                    <p>
                      Headers allow you to bundle important data alongside your
                      actions.
                    </p>
                    <p>
                      Headers are free and reusable between bots and actions.
                      Your bot can have an <strong>unlimited</strong> number of
                      commands.
                    </p>
                  </div>
                ),
                header: "Headers",
              }}
              items={{
                data: headers,
                render: (props) => {
                  return <Header {...props}></Header>;
                },
              }}
              key="headers"
              pagination={[]}
            ></Editor>
          ),
          to: "/headers",
        },
        {
          content: "Transforms",
          icon: "exchange",
          key: "transforms",
          render: (
            <Editor
              filter={{
                placeholder: "Filter your transforms...",
                onClickAdd: () => {
                  console.log("add transform");
                },
              }}
              info={{
                content: (
                  <div>
                    <p>
                      Transforms allow you to easily modify data entering and
                      leaving your bot.
                    </p>
                    <p>
                      Transforms are a useful but somewhat advanced feature. You
                      can{" "}
                      <a href="#docs/transformers">
                        read more about transforms
                      </a>{" "}
                      in the docs.
                    </p>
                  </div>
                ),
                header: "Transforms",
              }}
              items={{
                data: transforms,
                render: (props) => {
                  return <Transform {...props}></Transform>;
                },
              }}
              key="transforms"
              pagination={[]}
            ></Editor>
          ),
          to: "/transforms",
        },
      ]}
    ></View>
  );
}
