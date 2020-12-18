import { Ionicons } from "@expo/vector-icons";
import { BaseScreen, Button, Input, PasswordInput } from "@shared/ui";
import { Header } from "@shared/ui/Header";
import { VerticalSpacer } from "@shared/ui/Spacers";
import { Typography } from "@shared/ui/Text";
import React from "react";
import styled from "styled-components/native";

const TopContent = styled.View`
  padding-top: 100px;
  flex: 3;
`;

const BottomContent = styled.View`
  justify-content: flex-end;
  flex: 2;
`;

const Line = styled.View`
  height: 1px;
  flex: 1;
  background-color: #fff;
  margin-right: 16px;
  margin-left: 16px;
`;

const OrContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface LoginContainerProps {
  formData: {
    email: string;
    password: string;
  };
  onBack(): void;
}

const LoginContainer = ({ formData, onBack }: LoginContainerProps) => (
  <BaseScreen>
    <Header onBackPress={onBack} />

    <TopContent>
      <Typography variant="titlePrimary">Login</Typography>
    </TopContent>

    <BottomContent>
      <Input
        IconLeft={Ionicons as any}
        iconLeftName="mail-outline"
        value={formData.email}
        onChange={() => null}
        placeholder="email"
      />

      <VerticalSpacer size="medium" />

      <PasswordInput
        IconLeft={Ionicons as any}
        iconLeftName="lock-closed-outline"
        value={formData.password}
        onChange={() => null}
        placeholder="email"
      />

      <VerticalSpacer size="big" />

      <Button onPress={() => null} title="Logar" color="primary" />

      <VerticalSpacer size="big" />

      <OrContent>
        <Line />

        <Typography variant="bodyPrimary">or</Typography>

        <Line />
      </OrContent>

      <VerticalSpacer size="medium" />

      <Button onPress={() => null} title="Criar conta" />
    </BottomContent>
  </BaseScreen>
);

export default LoginContainer;
