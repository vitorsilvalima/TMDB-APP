import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabBar } from "./components/TabBar";
import MovieHome from "@features/movie/screens/MovieHome";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@shared/constants/Colors";
import { TabBarIcon } from "./components/TabBarIcon";

export const APP_ROUTES = {
  itself: "app",
  movieList: "app.movielist",
  search: "app.search",
  profile: "app.profile",
} as const;

export type AppParamList = {
  [APP_ROUTES.movieList]: undefined;
  [APP_ROUTES.profile]: undefined;
  [APP_ROUTES.search]: undefined;
};

const AppTabNavigator = createBottomTabNavigator<AppParamList>();

export const AppStack = () => (
  <AppTabNavigator.Navigator tabBar={TabBar}>
    <AppTabNavigator.Screen
      name={APP_ROUTES.movieList}
      component={MovieHome}
      options={{
        tabBarIcon: TabBarIcon(
          <Ionicons
            name="videocam"
            color={Colors.dark.primaryColor}
            size={24}
          />,
          <Ionicons name="videocam-outline" color={"#686868"} size={24} />
        ),
      }}
    />

    <AppTabNavigator.Screen
      name={APP_ROUTES.search}
      component={MovieHome}
      options={{
        tabBarIcon: TabBarIcon(
          <Ionicons name="search" color={Colors.dark.primaryColor} size={24} />,
          <Ionicons name="search-outline" color={"#686868"} size={24} />
        ),
      }}
    />

    <AppTabNavigator.Screen
      name={APP_ROUTES.profile}
      component={MovieHome}
      options={{
        tabBarIcon: TabBarIcon(
          <Ionicons
            name="person-circle"
            color={Colors.dark.primaryColor}
            size={24}
          />,
          <Ionicons name="person-circle-outline" color={"#686868"} size={24} />
        ),
      }}
    />
  </AppTabNavigator.Navigator>
);
