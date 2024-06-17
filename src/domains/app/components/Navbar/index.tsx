import { NavbarContainer } from "./ui";
import { Logo } from "@/assets/icons/logo";
import { ROUTES_MAPPING } from "@/common/constants/routes";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <Link component={RouterLink} to={ROUTES_MAPPING.PUBLIC.FAVORITES}>
        <p>Favorites</p>
      </Link>
    </NavbarContainer>
  );
};
