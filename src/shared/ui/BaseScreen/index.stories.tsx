import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { BaseScreen } from ".";
import { Button } from "../Button";

storiesOf("BaseScreen", module).add("default", () => (
  <BaseScreen>
    <Button title="TEST" onPress={() => null} />
  </BaseScreen>
));
