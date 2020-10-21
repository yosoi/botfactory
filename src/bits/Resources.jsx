import { Header, Icon, Menu, Segment } from "semantic-ui-react";
import { NavLink, Route, Switch } from "react-router-dom";

import React from "react";
import View from "bits/View";

export default function Resources() {
  return (
    <View
      header="Resources"
      subviews={[
        {
          content: "Headers",
          icon: "code",
          render: <p>header</p>,
          to: "/headers",
        },
        {
          content: "Transforms",
          icon: "exchange",
          render: <p>transform</p>,
          to: "/transforms",
        },
      ]}
    ></View>
  );