import { NavbarContainer } from "./ui";
import { Logo } from "@/assets/icons/logo";
import { ROUTES_MAPPING } from "@/common/constants/routes";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ThemeButton } from "./components/ThemeButton";
import { Text } from "@/shared/ui/Text";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <Link component={RouterLink} to={ROUTES_MAPPING.PUBLIC.FAVORITES}>
        <Text>Favorites</Text>
      </Link>
      <ThemeButton />
    </NavbarContainer>
  );
};
