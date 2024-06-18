import { styled } from "@mui/material";

const ImageContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto",
});

const Image = styled("img")({
  width: "100%",
  height: "auto",
});

export const S = { ImageContainer, Image };
