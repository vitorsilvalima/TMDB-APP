import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import LoginContainer from ".";

storiesOf("features/auth/containers/login", module)
  .add("default", () => (
    <LoginContainer
      formData={{
        email: "",
        password: "",
      }}
      onBack={action("onBack")}
    />
  ))
  .add("filled", () => (
    <LoginContainer
      formData={{
        email: "vitorsilvalima29@gmail.com",
        password: "password",
      }}
      onBack={action("onBack")}
    />
  ));
