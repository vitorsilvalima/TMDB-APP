import LoginContainer from "@features/auth/containers/login";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { AuthParamList, AUTH_ROUTES } from "../../navigation";

type LoginScreenProps = {
  navigation: StackNavigationProp<AuthParamList, "app.auth.login">;
};

const LoginScreen = ({ navigation }: LoginScreenProps) => (
  <LoginContainer
    formData={{
      email: "",
      password: "",
    }}
    onBack={navigation.goBack}
  />
);

export default LoginScreen;
