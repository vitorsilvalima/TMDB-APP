import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home";
import LoginScreen from "./screens/login";

export const AUTH_ROUTES = {
  itself: "auth",
  home: "auth.home",
  login: "auth.login",
} as const;

export type AuthParamList = {
  [AUTH_ROUTES.home]: undefined;
  [AUTH_ROUTES.login]: undefined;
};

const AuthStackNavigator = createStackNavigator<AuthParamList>();

export const AuthStack = () => (
  <AuthStackNavigator.Navigator screenOptions={{ headerShown: false }}>
    <AuthStackNavigator.Screen name={AUTH_ROUTES.home} component={HomeScreen} />
    <AuthStackNavigator.Screen
      name={AUTH_ROUTES.login}
      component={LoginScreen}
    />
  </AuthStackNavigator.Navigator>
);
