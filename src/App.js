import { Route, Switch } from "react-router-dom";

import AuthWrapper from "bits/AuthWrapper";
import MainMenu from "bits/MainMenu";
import Page from "bits/Page";
import React from "react";

const ACCOUNT = "Account";
const HEADERS = "Headers";
const TRANSFORMS = "Transforms";

function App() {
  const bots = [
    { id: "maester", name: "Maester", path: "/bot/maester" },
    { id: "untitled", name: "Untitled", path: "/bot/untitled" },
    { id: "workbot", name: "Workbot", path: "/bot/workbot" },
  ];

  const views = [
    { name: HEADERS, icon: "code", path: "/headers", text: HEADERS },
    {
      name: TRANSFORMS,
      icon: "exchange",
      path: "/transforms",
      text: TRANSFORMS,
    },
    { name: ACCOUNT, icon: "setting", path: "/account", text: ACCOUNT },
  ];

  return (
    <AuthWrapper>
      <Page
        menu={
          <MainMenu
            content={
              <Switch>
                {bots.concat(views).map(({ path, text }) => (
                  <Route path={path}>{text}</Route>
                ))}
              </Switch>
            }
            bots={bots}
            views={views}
          ></MainMenu>
        }
      ></Page>
    </AuthWrapper>
  );
}

export default App;
