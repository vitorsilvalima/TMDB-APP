import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const CenterViewWrapper = styled.View<{}>`
  flex: 1;
  background-color: #131313;
  justify-content: center;
  align-items: center;
`;

export const centerViewDecorator = (Story: any) => (
  <CenterViewWrapper>
    <Story />
  </CenterViewWrapper>
);
