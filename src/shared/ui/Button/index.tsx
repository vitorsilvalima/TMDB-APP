import Colors from "@shared/constants/Colors";
import React from "react";
import styled from "styled-components/native";

type color = "primary" | "secondary" | "default";

const backgroundColors: Record<color, string> = {
  default: Colors.dark.secondaryColor,
  primary: Colors.dark.primaryColor,
  secondary: Colors.dark.secondaryColor,
};

const colors: Record<color, string> = {
  default: "black",
  primary: "white",
  secondary: "black",
};

const ButtonWrapper = styled.TouchableOpacity<{ color: color }>`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${(p) => backgroundColors[p.color]};
  border-radius: 8px;
`;

const ButtonTitle = styled.Text<{ color: color }>`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: ${(p) => colors[p.color]};
`;

interface ButtonWrapperProps {
  title: string;
  onPress(): void;
  color?: color;
}

export const Button = ({
  title,
  onPress,
  color = "default",
}: ButtonWrapperProps) => (
  <ButtonWrapper onPress={onPress} color={color}>
    <ButtonTitle color={color}>{title}</ButtonTitle>
  </ButtonWrapper>
);
