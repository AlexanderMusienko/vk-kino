import { NavbarContainer } from "./ui";
import { Logo } from "@/assets/icons/logo";
import { ROUTES_MAPPING } from "@/common/constants/routes";
import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ThemeButton } from "./components/ThemeButton";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Box display="flex" gap={2} alignItems="center">
        <Link component={RouterLink} to={ROUTES_MAPPING.ROOT}>
          <Logo />
        </Link>
        {/* <Link component={RouterLink} to={ROUTES_MAPPING.PUBLIC.FAVORITES}>
          <Text>Favorites</Text>
        </Link> */}
      </Box>

      <ThemeButton />
    </NavbarContainer>
  );
};
