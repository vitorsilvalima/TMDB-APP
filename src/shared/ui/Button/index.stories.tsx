import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { centerViewDecorator } from "@storybook-decorators/index";
import { Button } from ".";

storiesOf("Button", module)
  .addDecorator(centerViewDecorator)
  .add("default", () => (
    <Button onPress={action("clicked-text")} title="test" />
  ));
