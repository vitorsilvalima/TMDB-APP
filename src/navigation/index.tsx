import { AuthStack } from "@features/auth/navigation";
import { OnboardingStack } from "@features/onboarding/navigation";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { AppParamList, AppStack } from "./app";
import routes from "./routes";

export type RootStackParamList = {
  [routes.onBoarding.itself]: undefined;
  [routes.auth.itself]: undefined;
  [routes.app.itself]: NavigatorScreenParams<AppParamList>;
  // [routes.app.itself]: NestedNavigatorParams<AppParamList>;
};

const Stack = createStackNavigator<RootStackParamList>();

type PathImpl<T, K extends keyof T> = K extends string
  ? T[K] extends Record<string, any>
    ? T[K] extends ArrayLike<any>
      ? K | `${K}.${PathImpl<T[K], Exclude<keyof T[K], keyof any[]>>}`
      : K | `${K}.${PathImpl<T[K], keyof T[K]>}`
    : K
  : never;

type Path<T> = PathImpl<T, keyof T> | keyof T;

type PathValue<T, P extends Path<T>> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Rest extends Path<T[K]>
      ? PathValue<T[K], Rest>
      : never
    : never
  : P extends keyof T
  ? T[P]
  : never;

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

      <Stack.Screen name={routes.app.itself} component={AppStack} />
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
