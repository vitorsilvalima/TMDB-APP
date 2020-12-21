import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "@features/auth/screens/login";
import { TabBar } from "./components/TabBar";

export const APP_ROUTES = {
  itself: "app",
  movieList: "app.movielist",
  search: "app.search",
  profile: "app.profile",
} as const;

const AppTabNavigator = createBottomTabNavigator();

export const AppStack = () => (
  <AppTabNavigator.Navigator tabBar={TabBar}>
    <AppTabNavigator.Screen
      name={APP_ROUTES.movieList}
      component={LoginScreen}
    />

    <AppTabNavigator.Screen name={APP_ROUTES.profile} component={LoginScreen} />
  </AppTabNavigator.Navigator>
);
