import { Button, Form } from "semantic-ui-react";

import FilterMenu from "bits/FilterMenu";
import Info from "bits/Info";
import PageMenu from "bits/PageMenu";
import React from "react";
import SectionDivider from "bits/SectionDivider";

export default function Editor({ action, filter, info, items, pagination }) {
  return (
    <Info {...info}>
      {filter ? (
        <>
          <FilterMenu {...filter}></FilterMenu>
          <SectionDivider></SectionDivider>
        </>
      ) : (
        <></>
      )}

      <Form>
        {items.data.map((item) => (
          <Form.Field>{items.render(item)}</Form.Field>
        ))}
        {action ? (
          <>
            <Form.Field>
              <SectionDivider warning></SectionDivider>
            </Form.Field>
            <Form.Field>
              <Button
                content={`Delete this bot forever`}
                fluid
                icon="trash alternate"
                labelPosition="left"
              ></Button>
            </Form.Field>
          </>
        ) : (
          <></>
        )}
      </Form>
      {pagination ? (
        <>
          <SectionDivider hidden></SectionDivider>
          <PageMenu {...pagination}></PageMenu>
        </>
      ) : (
        <></>
      )}
    </Info>
  );
}
