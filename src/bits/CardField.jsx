import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

import { Form } from "semantic-ui-react";

export default function CardField() {
  const [complete, setComplete] = useState(false);
  const [focused, setFocused] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const canSubmit = stripe && elements && complete;

  return (
    <Form.Field
      className={
        focused ? "CardElementField CardElementField_focus" : "CardElementField"
      }
    >
      <Form.Input
        as={CardElement}
        onBlur={() => {
          setFocused(false);
        }}
        onChange={(e) => {
          setComplete(e.complete);
        }}
        onFocus={() => {
          setFocused(true);
        }}
        options={{
          style: {
            base: {
              color: "rgba(0,0,0,.87)",
              fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
              fontSmoothing: "antialiased",
              fontSize: "16px",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#fa755a",
              iconColor: "#fa755a",
            },
          },
        }}
      ></Form.Input>
    </Form.Field>
  );
}
