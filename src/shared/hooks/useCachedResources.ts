import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export enum Fonts {
  "montSerratBold" = "Montserrat-Bold",
  "montSerratLight" = "Montserrat-Light",
  "montSerratMedium" = "Montserrat-Medium",
  "montSerratRegular" = "Montserrat-Regular",
}

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("../../../assets/fonts/SpaceMono-Regular.ttf"),
          [Fonts.montSerratBold]: require("../../../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
          [Fonts.montSerratLight]: require("../../../assets/fonts/Montserrat/Montserrat-Light.ttf"),
          [Fonts.montSerratMedium]: require("../../../assets/fonts/Montserrat/Montserrat-Medium.ttf"),
          [Fonts.montSerratRegular]: require("../../../assets/fonts/Montserrat/Montserrat-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
