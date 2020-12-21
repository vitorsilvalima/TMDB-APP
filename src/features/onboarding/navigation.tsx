import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScrenn from "@features/onboarding/screens";

export const onboardingRoutes = {
  itself: "onboarding",
} as const;

export type OnBoardingStackParamList = {
  [onboardingRoutes.itself]: undefined;
};

const OnBoardingNavigator = createStackNavigator<OnBoardingStackParamList>();

export const OnboardingStack = () => (
  <OnBoardingNavigator.Navigator initialRouteName={onboardingRoutes.itself}>
    <OnBoardingNavigator.Screen
      name={onboardingRoutes.itself}
      component={MainScrenn}
    />
  </OnBoardingNavigator.Navigator>
);
