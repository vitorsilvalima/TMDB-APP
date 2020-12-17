import React from "react";
import styled from "styled-components/native";

const ButtonWrapper = styled.TouchableOpacity`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const ButtonTitle = styled.Text`
  font-size: 14px;
`;

interface ButtonWrapperProps {
  title: string;
  onPress(): void;
}

export const Button = ({ title, onPress }: ButtonWrapperProps) => (
  <ButtonWrapper onPress={onPress}>
    <ButtonTitle>{title}</ButtonTitle>
  </ButtonWrapper>
);
