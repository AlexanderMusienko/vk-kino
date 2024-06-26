import { NavbarContainer } from "./ui";
import { Logo } from "@/assets/icons/logo";
import { ROUTES_MAPPING } from "@/common/constants/routes";
import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ThemeButton } from "./components/ThemeButton";
import { Text } from "@/shared/ui/Text";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Box display="flex" gap={4} alignItems="center">
        <Link component={RouterLink} to={ROUTES_MAPPING.ROOT}>
          <Logo />
        </Link>
        <Box display="flex" gap={2}>
          <Link component={RouterLink} to={ROUTES_MAPPING.PUBLIC.MOVIES}>
            <Text>Фильмы</Text>
          </Link>
          <Link component={RouterLink} to={ROUTES_MAPPING.PUBLIC.FAVORITES}>
            <Text>Избранное</Text>
          </Link>
        </Box>
      </Box>
      <ThemeButton />
    </NavbarContainer>
  );
};
