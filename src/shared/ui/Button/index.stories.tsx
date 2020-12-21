import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { centerViewDecorator } from "@storybook-decorators/index";
import { Button } from ".";
import { VerticalSpacer } from "../Spacers";

storiesOf("Button", module)
  .addDecorator(centerViewDecorator({ addPadding: true }))
  .add("default", () => (
    <>
      <Button onPress={action("clicked-text")} title="default" />
      <VerticalSpacer />
      <Button
        onPress={action("clicked-text")}
        title="primary"
        color="primary"
      />
      <VerticalSpacer />
      <Button
        onPress={action("clicked-text")}
        title="secondary"
        color="secondary"
      />
      <VerticalSpacer />
    </>
  ));
