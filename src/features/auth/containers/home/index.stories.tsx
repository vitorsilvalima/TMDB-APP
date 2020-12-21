import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import HomeContainer from ".";

storiesOf("features/auth/containers/home", module).add("default", () => (
  <HomeContainer
    onLogin={action("onLogin")}
    onCreatedAccount={action("onCreatedAccount")}
  />
));
