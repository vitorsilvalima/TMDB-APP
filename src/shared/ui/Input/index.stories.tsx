import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { centerViewDecorator } from "@storybook-decorators/index";
import { Input } from ".";
import { Ionicons } from "@expo/vector-icons";

storiesOf("Input", module)
  .addDecorator(centerViewDecorator())
  .add("default", () => (
    <Input
      IconLeft={Ionicons as any}
      iconName="mail-outline"
      onChange={action("clicked-text")}
      value="test"
    />
  ));
