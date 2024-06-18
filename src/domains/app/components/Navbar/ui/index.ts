import { styled } from "@mui/material";
debugger;
export const NavbarContainer = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBlock: "1.2rem",
  maxWidth: "1280px",
  margin: "0 auto",
  marginBottom: "2rem",
  backgroundColor: theme.palette.background.default,
}));
