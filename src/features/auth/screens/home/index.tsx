import React from "react";
import HomeContainer from "@features/auth/containers/home";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "@features/auth/navigation";

interface HomeScreen {
  navigation: StackNavigationProp<AuthParamList, "auth.home">;
}

const HomeScreen = ({ navigation }: HomeScreen) => {
  return (
    <HomeContainer
      onCreatedAccount={() => null}
      onLogin={() => navigation.navigate("auth.login")}
    />
  );
};

export default HomeScreen;
