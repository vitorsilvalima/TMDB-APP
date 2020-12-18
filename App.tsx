import StorybookApp from "./storybook";
import AppEntry from "./src";
// export { default } from "./src";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "@shared/hooks/useCachedResources";
import useColorScheme from "@shared/hooks/useColorScheme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        {/* <StorybookApp /> */}
        <AppEntry />
      </SafeAreaProvider>
    );
  }
}
