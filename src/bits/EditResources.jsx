import Editor from "bits/Editor";
import Header from "bits/Header";
import React from "react";
import Transform from "bits/Transform";
import View from "bits/View";

export default function EditResources() {
  const headers = [{}, {}];
  const transforms = [{}, {}];
  return (
    <View
      header="Resources"
      subviews={[
        {
          content: "Headers",
          icon: "code",
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
              pagination={[]}
            ></Editor>
          ),
          to: "/headers",
        },
        {
          content: "Transforms",
          icon: "exchange",
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
                      Transforms are an extremely useful but somewhat advanced
                      feature. You can{" "}
                      <a href="" target="_blank">
                        read about transforms
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
              pagination={[]}
            ></Editor>
          ),
          to: "/transforms",
        },
      ]}
    ></View>
  );
}
