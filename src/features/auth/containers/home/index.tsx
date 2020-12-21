import { BaseScreen, Button } from "@shared/ui";
import { VerticalSpacer } from "@shared/ui/Spacers";
import { Typography } from "@shared/ui/Text";
import React from "react";
import styled from "styled-components/native";

const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const TitleWrapper = styled.View`
  width: 80%;
`;

interface HomeContainerProps {
  onCreatedAccount(): void;
  onLogin(): void;
}

const HomeContainer = ({ onCreatedAccount, onLogin }: HomeContainerProps) => (
  <BaseScreen>
    <Content>
      <TitleWrapper>
        <Typography variant="titlePrimary">
          The Movie Database (TMDb) App
        </Typography>
      </TitleWrapper>

      <VerticalSpacer size="big" />

      <Typography variant="bodyPrimary">
        The Movie Database (TMDb) is a popular, user editable database for
        movies and TV shows.
      </Typography>
      <VerticalSpacer size="medium" />
      <Button title="Logar" onPress={onLogin} color="primary" />
      <VerticalSpacer />
      <Button title="Criar Conta" onPress={onCreatedAccount} />
    </Content>
  </BaseScreen>
);

export default HomeContainer;
