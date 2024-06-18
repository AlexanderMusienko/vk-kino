import { Chip, styled } from "@mui/material";

export const PosterContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 10px;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const PosterImage = styled("img")`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const Fallback = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  object-fit: cover;
  border-radius: 10px;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const RateChip = styled(Chip)(({ theme }) => ({
  position: "absolute",
  zIndex: 3,
  left: "15px",
  top: "15px",
  backgroundColor: theme.palette.background.default,
  fontWeight: 600,

  "& span": {
    fontSize: "14px",
  },
}));
