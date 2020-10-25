import { Divider, Grid, Icon, TextArea } from "semantic-ui-react";

import FormatDropdown from "bits/FormatDropdown";
import PropertyEditor from "bits/PropertyEditor";
import React from "react";

export default function Transform(props) {
  return (
    <PropertyEditor placeholder={"Name your transform"} {...props}>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <FormatDropdown placeholder="Select input type..."></FormatDropdown>
                </Grid.Column>
                <Grid.Column>
                  <FormatDropdown placeholder="Select output type..."></FormatDropdown>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider vertical>
              <Icon name="arrow right"></Icon>
            </Divider>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {/* TODO: Replace this with a nice syntax highlighting editor (codemirror?) */}
            <TextArea
              placeholder="Enter a valid transformer..."
              style={{ minHeight: "20em" }}
            ></TextArea>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </PropertyEditor>
  );
}
