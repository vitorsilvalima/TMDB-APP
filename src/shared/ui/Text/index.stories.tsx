import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { centerViewDecorator } from "@storybook-decorators/index";
import { Typography } from ".";
import { Ionicons } from "@expo/vector-icons";
import { VerticalSpacer } from "../Spacers";

storiesOf("Typography", module)
  .addDecorator(centerViewDecorator())
  .add("default", () => (
    <>
      <Typography variant="titlePrimary">titlePrimary</Typography>
      <VerticalSpacer />
      <Typography variant="titleSecondary">titleSecondary</Typography>
      <VerticalSpacer />
      <Typography variant="subtitlePrimary">subtitlePrimary</Typography>
      <VerticalSpacer />
      <Typography variant="subtitleSecondary">subtitleSecondary</Typography>
      <VerticalSpacer />
      <Typography variant="bodyPrimary">bodyPrimary</Typography>
      <VerticalSpacer />
    </>
  ));
