import React from "react";
import styled from "styled-components/native";

const ButtonWrapper = styled.TouchableOpacity`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: #ff002e;
  border-radius: 8px;
`;

const ButtonTitle = styled.Text`
  font-size: 16px;
  text-align: center;
  color: white;
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
