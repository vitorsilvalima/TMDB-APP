import React from "react";
import HomeContainer from "@features/auth/containers/home";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "@features/auth/navigation";

interface HomeScreen {
  navigation: StackNavigationProp<AuthParamList, "app.auth.home">;
}

const HomeScreen = ({ navigation }: HomeScreen) => {
  return (
    <HomeContainer
      onCreatedAccount={() => null}
      onLogin={() => navigation.navigate("app.auth.login")}
    />
  );
};

export default HomeScreen;
