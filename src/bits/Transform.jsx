import { Divider, Form, Grid, Icon, Select, TextArea } from "semantic-ui-react";

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
                  <Select fluid placeholder="Select input type..."></Select>
                </Grid.Column>
                <Grid.Column>
                  <Select fluid placeholder="Select output type..."></Select>
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
            <Form>
              {/* Replace this with a nice syntax highlighting editor */}
              <TextArea
                placeholder="Enter a valid transformer..."
                style={{ minHeight: "20em" }}
              ></TextArea>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </PropertyEditor>
  );
}
