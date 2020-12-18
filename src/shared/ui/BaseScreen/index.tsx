import React from "react";
import styled from "styled-components/native";

const SafeArea = styled.SafeAreaView`
  background-color: #131313;
  flex: 1;
`;

const Content = styled.View`
  padding: 20px;
  flex: 1;
`;

interface BaseScreenProps {
  children: React.ReactNode;
}

export const BaseScreen = ({ children }: BaseScreenProps) => (
  <SafeArea>
    <Content>{children}</Content>
  </SafeArea>
);
