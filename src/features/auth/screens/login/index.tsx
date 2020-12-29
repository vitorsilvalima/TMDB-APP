import LoginContainer from "@features/auth/containers/login";
import { AppParamList } from "@navigation/app";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../../../../navigation";
import { AuthParamList } from "../../navigation";

type LoginScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthParamList, "auth.login">,
    CompositeNavigationProp<
      BottomTabNavigationProp<AppParamList, "app.movielist">,
      StackNavigationProp<RootStackParamList, "app">
    >
  >;
};

const LoginScreen = ({ navigation }: LoginScreenProps) => (
  <LoginContainer
    formData={{
      email: "",
      password: "",
    }}
    onLogin={() =>
      navigation.navigate("app", {
        screen: "app.movielist",
      })
    }
    onBack={navigation.goBack}
  />
);

export default LoginScreen;
