import { Route, Switch } from "react-router-dom";

import AuthWrapper from "bits/AuthWrapper";
import EditBot from "bits/EditBot";
import EditHeaders from "bits/EditHeaders";
import EditTransforms from "bits/EditTransforms";
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
                <Route path={view.path}>{view.component}</Route>
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
