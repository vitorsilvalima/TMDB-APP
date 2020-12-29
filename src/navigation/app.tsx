import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBar } from "./components/TabBar";
import MovieHome from "@features/movie/screens/MovieHome";

export const APP_ROUTES = {
  itself: "app",
  movieList: "app.movielist",
  search: "app.search",
  profile: "app.profile",
} as const;

export type AppParamList = {
  [APP_ROUTES.movieList]: undefined;
};

const AppTabNavigator = createBottomTabNavigator<AppParamList>();

export const AppStack = () => (
  <AppTabNavigator.Navigator tabBar={TabBar}>
    <AppTabNavigator.Screen name={APP_ROUTES.movieList} component={MovieHome} />
  </AppTabNavigator.Navigator>
);
