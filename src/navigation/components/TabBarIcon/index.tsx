import React from "react";

export interface TabBarIcon {
  focused: boolean;
}

export const TabBarIcon = (
  FocusedIcon: React.ReactElement,
  UnfocusedIcon: React.ReactElement
) => ({ focused }: TabBarIcon) => {
  return focused ? FocusedIcon : UnfocusedIcon;
};
