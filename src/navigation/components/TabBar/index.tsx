import React from "react";
import {
  BottomTabBarOptions,
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@shared/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export const APP_ROUTES = {
  itself: "app",
  movieList: "app.movielist",
} as const;

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps<BottomTabBarOptions>) => {
  // const focusedOptions = descriptors[state.routes[state.index].key].options;

  // if (focusedOptions.tabBarVisible === false) {
  //   return null;
  // }

  return (
    <SafeAreaView
      edges={["bottom"]}
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: Colors.dark.background,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ padding: 10 }}
          >
            {options.tabBarIcon?.({
              focused: isFocused,
              color: "test",
              size: 30,
            })}
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

{
  /* <Ionicons
              name="videocam"
              color={isFocused ? Colors.dark.primaryColor : "#686868"}
              size={24}
            /> */
}
