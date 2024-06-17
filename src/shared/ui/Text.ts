import { styled } from "@mui/material";
export type TextProps = {
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
};

export const Text = styled("p")<TextProps>(
  ({
    fontSize = "1.6rem",
    fontWeight = "400",
    lineHeight = "1.5",
    letterSpacing = "normal",
  }) => ({
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
  })
);
