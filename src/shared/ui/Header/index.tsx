import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import { Typography } from "../Text";

const HeaderButton = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 12px;
  background-color: #50485b;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const TitleWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface HeaderProps {
  onBackPress(): void;
  title?: string;
}

export const Header = ({ onBackPress, title }: HeaderProps) => (
  <HeaderWrapper>
    <HeaderButton onPress={onBackPress}>
      <Ionicons
        name="chevron-back-outline"
        size={24}
        color="white"
        style={{ textAlign: "center" }}
      />
    </HeaderButton>

    {/* <TitleWrapper>
      {title && <Typography variant="subtitlePrimary">{title}</Typography>}
    </TitleWrapper>

    <HeaderButton onPress={onBackPress}>
      <Ionicons
        name="share-outline"
        size={24}
        color="white"
        style={{
          textAlign: "center",
          height: 24,
          width: 24,
          alignSelf: "center",
        }}
      />
    </HeaderButton> */}
  </HeaderWrapper>
);
