import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

interface options {
  addPadding?: boolean;
}

const CenterViewWrapper = styled.View<{ options?: options }>`
  flex: 1;
  background-color: #131313;
  justify-content: center;
  align-items: center;
  padding: ${(p) => (p?.options?.addPadding ? "16px" : 0)};
`;

export const centerViewDecorator = (options?: options) => (Story: any) => (
  <CenterViewWrapper options={options}>
    <Story />
  </CenterViewWrapper>
);
