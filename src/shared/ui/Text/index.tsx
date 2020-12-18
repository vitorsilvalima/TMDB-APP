import { Fonts } from "@shared/hooks/useCachedResources";
import React, { PureComponent } from "react";
import styled from "styled-components/native";

interface TypographyProps {
  children: React.ReactNode;
}

type variants =
  | "titlePrimary"
  | "titleSecondary"
  | "subtitlePrimary"
  | "subtitleSecondary"
  | "bodyPrimary";

const fontSizeMap: Record<variants, number> = {
  bodyPrimary: 14,
  subtitlePrimary: 16,
  subtitleSecondary: 18,
  titlePrimary: 26,
  titleSecondary: 22,
};

const fontNameMap: Record<variants, string> = {
  bodyPrimary: Fonts.montSerratRegular,
  subtitlePrimary: Fonts.montSerratMedium,
  subtitleSecondary: Fonts.montSerratMedium,
  titlePrimary: Fonts.montSerratBold,
  titleSecondary: Fonts.montSerratBold,
};

interface Typography {
  variant: variants;
}

export const Typography = styled.Text<Typography>`
  font-family: ${Fonts.montSerratBold};
  font-size: ${(p) => fontSizeMap[p.variant]}px;
  font-family: ${(p) => fontNameMap[p.variant]};
  color: #fff;
`;
