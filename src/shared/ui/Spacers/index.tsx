import React, { PureComponent } from "react";
import styled from "styled-components/native";

type size = "small" | "medium" | "big" | "extraBig";

interface SpacerProps {
  size?: size;
}

const sizeMap: Record<size, number> = {
  small: 16,
  medium: 20,
  big: 26,
  extraBig: 32,
};

export const VerticalSpacer = styled.View<SpacerProps>`
  width: 100%;
  height: ${(p) => sizeMap[p.size || "small"]}px;
`;
