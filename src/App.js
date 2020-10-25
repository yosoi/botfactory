import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import AuthWrapper from "bits/AuthWrapper";
import { BotsProvider } from "bits/BotsContext";
import EditBot from "bits/EditBot";
import EditResources from "bits/EditResources";
import { Elements } from "@stripe/react-stripe-js";
import MainMenu from "bits/MainMenu";
import NewBot from "bits/NewBot";
import Page from "bits/Page";
import { loadStripe } from "@stripe/stripe-js";

// TODO: replace this with app-specific key
const PUBLISHABLE_STRIPE_KEY =
  "pk_test_51H6rIkIw1gARdZqqtmeFOSI8nsqdyHQAtH2XRAkSMSkzCz5AZCPwsUU1BVPqFOa8uwrFihNrMjEkAC7NkEHI7gsF00MxWZlulW";

const stripePromise = loadStripe(PUBLISHABLE_STRIPE_KEY);

function App() {
  const [bots, setBots] = useState([
    { id: "maester", name: "Maester", path: "/bot/maester", text: "maester" },
    {
      id: "untitled",
      name: "Untitled",
      path: "/bot/untitled",
      text: "untitiled",
    },
    { id: "workbot", name: "Workbot", path: "/bot/workbot", text: "workbot" },
  ]);

  useEffect(() => {
    // TODO: get list of bots from graphql api & subscribe to bot changes
    console.log("start");
  }, []);

  const views = [
    {
      name: "Actions",
      icon: "lightning",
      path: "/actions",
      text: "Actions",
    },
    {
      name: "Headers",
      icon: "code",
      path: "/headers",
      text: "Headers",
    },
    {
      name: "Transforms",
      icon: "exchange",
      path: "/transforms",
      text: "Transforms",
    },
  ];

  return (
    <Elements stripe={stripePromise}>
      <AuthWrapper>
        <BotsProvider value={bots}>
          <Page
            content={
              <Switch>
                <Route path="/bot/new" exact>
                  <NewBot></NewBot>
                </Route>
                <Route path="/bot/:botId">
                  <EditBot></EditBot>
                </Route>
                {views.map((view) => (
                  <Route key={view.name} path={view.path}>
                    <EditResources></EditResources>
                  </Route>
                ))}
              </Switch>
            }
            menu={{
              primary: <MainMenu views={views}></MainMenu>,
            }}
          ></Page>
        </BotsProvider>
      </AuthWrapper>
    </Elements>
  );
}

export default App;
