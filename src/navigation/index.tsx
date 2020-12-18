import { AuthStack } from "@features/auth/navigation";
import { OnboardingStack } from "@features/onboarding/navigation";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import routes from "./routes";

type RootStackParamList = {
  [routes.onBoarding.itself]: undefined;
  [routes.auth.itself]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={routes.auth.itself}
    >
      <Stack.Screen
        name={routes.onBoarding.itself}
        component={OnboardingStack}
      />
      <Stack.Screen name={routes.auth.itself} component={AuthStack} />
    </Stack.Navigator>
  );
}

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
