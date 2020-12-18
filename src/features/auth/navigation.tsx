import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home";

export const AUTH_ROUTES = {
  itself: "app.auth",
  home: "app.auth.home",
} as const;

type AuthParamList = {
  [AUTH_ROUTES.home]: undefined;
};

const AuthStackNavigator = createStackNavigator<AuthParamList>();

export const AuthStack = () => (
  <AuthStackNavigator.Navigator screenOptions={{ headerShown: false }}>
    <AuthStackNavigator.Screen name={AUTH_ROUTES.home} component={HomeScreen} />
  </AuthStackNavigator.Navigator>
);
