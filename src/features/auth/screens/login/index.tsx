import LoginContainer from "@features/auth/containers/login";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../../../../navigation";
import { AuthParamList } from "../../navigation";

type LoginScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthParamList, "auth.login">,
    StackNavigationProp<RootStackParamList>
  >;
};

const LoginScreen = ({ navigation }: LoginScreenProps) => (
  <LoginContainer
    formData={{
      email: "",
      password: "",
    }}
    onLogin={() => navigation.navigate("app")}
    onBack={navigation.goBack}
  />
);

export default LoginScreen;
