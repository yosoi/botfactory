import { Dropdown, Grid, Icon, Input, Select } from "semantic-ui-react";
import React, { useContext } from "react";

import HeadersContext from "bits/HeadersContext";
import PropertyEditor from "./PropertyEditor";
import TransformsContext from "bits/TransformsContext";

export default function Action() {
  const headers = useContext(HeadersContext);
  const transforms = useContext(TransformsContext);
  return (
    <PropertyEditor placeholder="Name your action...">
      <Grid>
        {[
          <Input fluid iconPosition="left" type="text" placeholder="URL" action>
            <Icon name="linkify"></Icon>
            <input />
            <Select
              compact
              defaultValue="get"
              options={[
                { key: "get", value: "get", text: "GET" },
                { key: "post", value: "post", text: "POST" },
                { key: "put", value: "put", text: "PUT" },
                { key: "delete", value: "delete", text: "DELETE" },
              ]}
            />
          </Input>,
          <Dropdown
            placeholder="Headers"
            fluid
            multiple
            search
            selection
            options={headers}
          />,
          <Dropdown
            placeholder="Request transform"
            fluid
            search
            selection
            options={transforms}
          />,
          <Dropdown
            placeholder="Response transform"
            fluid
            search
            selection
            options={transforms}
          />,
        ].map((child, index) => (
          <Grid.Row key={index}>
            <Grid.Column>{child}</Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    </PropertyEditor>
  );
}
