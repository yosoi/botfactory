import { Route, Switch } from "react-router-dom";

import AuthWrapper from "bits/AuthWrapper";
import EditBot from "bits/EditBot";
import EditHeaders from "bits/EditHeaders";
import EditTransforms from "bits/EditTransforms";
import MainMenu from "bits/MainMenu";
import NewBot from "bits/NewBot";
import Page from "bits/Page";
import React from "react";

const HEADERS = "Headers";
const TRANSFORMS = "Transforms";

function App() {
  const bots = [
    { id: "maester", name: "Maester", path: "/bot/maester", text: "maester" },
    {
      id: "untitled",
      name: "Untitled",
      path: "/bot/untitled",
      text: "untitiled",
    },
    { id: "workbot", name: "Workbot", path: "/bot/workbot", text: "workbot" },
  ];

  const views = [
    {
      component: <EditHeaders></EditHeaders>,
      name: HEADERS,
      icon: "code",
      path: "/headers",
      text: HEADERS,
    },
    {
      component: <EditTransforms></EditTransforms>,
      name: TRANSFORMS,
      icon: "exchange",
      path: "/transforms",
      text: TRANSFORMS,
    },
  ];

  return (
    <AuthWrapper>
      <Page
        content={
          <Switch>
            <Route path="/bot/new" exact>
              <NewBot></NewBot>
            </Route>
            <Route path="/bot/">
              <EditBot></EditBot>
            </Route>
            {views.map((view) => (
              <Route path={view.path}>{view.component}</Route>
            ))}
          </Switch>
        }
        menu={<MainMenu bots={bots} views={views}></MainMenu>}
      ></Page>
    </AuthWrapper>
  );
}

export default App;
