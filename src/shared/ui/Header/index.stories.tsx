import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { centerViewDecorator } from "@storybook-decorators/index";
import { Header } from ".";
import { VerticalSpacer } from "../Spacers";
import { BaseScreen } from "../BaseScreen";

storiesOf("shared/ui/Header", module).add("default", () => (
  <BaseScreen>
    <Header onBackPress={action("onBackPress")} title="default" />
  </BaseScreen>
));
