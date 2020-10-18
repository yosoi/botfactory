import {
  AmplifyAuthenticator,
  AmplifyContainer,
  AmplifySignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react";

import React from "react";

const Authenticator = (props) => {
  return (
    <AmplifyContainer>
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignUp
          formFields={[
            {
              type: "email",
              label: "Email",
              placeholder: "Enter your email",
              required: true,
            },
            {
              type: "password",
              label: "Password",
              placeholder: "Enter your password",
              required: true,
            },
          ]}
          headerText="Create account"
          signInText="Unlock it."
          slot="sign-up"
          usernameAlias="email"
        />
        <AmplifySignIn
          submitButtonText="Unlock"
          headerText="Unlock account"
          slot="sign-in"
          usernameAlias="email"
        />
      </AmplifyAuthenticator>
    </AmplifyContainer>
  );
};

export default Authenticator;
