import { Route, Switch } from "react-router-dom";

import AuthWrapper from "bits/AuthWrapper";
import EditBot from "bits/EditBot";
import EditResources from "bits/EditResources";
import { Elements } from "@stripe/react-stripe-js";
import MainMenu from "bits/MainMenu";
import NewBot from "bits/NewBot";
import Page from "bits/Page";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const HEADERS = "Headers";
const PUBLISHABLE_STRIPE_KEY =
  "pk_test_51H6rIkIw1gARdZqqtmeFOSI8nsqdyHQAtH2XRAkSMSkzCz5AZCPwsUU1BVPqFOa8uwrFihNrMjEkAC7NkEHI7gsF00MxWZlulW";
const TRANSFORMS = "Transforms";

const stripePromise = loadStripe(PUBLISHABLE_STRIPE_KEY);

function App() {
  // TODO: get list of bots from graphql api & subscribe to bot changes
  // TODO: use context to provide bots to child components
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
      name: HEADERS,
      icon: "code",
      path: "/headers",
      text: HEADERS,
    },
    {
      name: TRANSFORMS,
      icon: "exchange",
      path: "/transforms",
      text: TRANSFORMS,
    },
  ];

  return (
    <Elements stripe={stripePromise}>
      <AuthWrapper>
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
            primary: <MainMenu bots={bots} views={views}></MainMenu>,
            secondary: <div></div>,
          }}
        ></Page>
      </AuthWrapper>
    </Elements>
  );
}

export default App;
