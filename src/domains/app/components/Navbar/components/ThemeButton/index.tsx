import { MoonIcon } from "@/assets/icons/moon-icon";
import { SunIcon } from "@/assets/icons/sun-icon";
import { useStores } from "@/common/hooks/use-stores";
import { ETheme } from "@/common/types/theme.type";
import { IconButton } from "@mui/material";
import { observer } from "mobx-react-lite";

export const ThemeButton = observer(() => {
  const {
    appStore: { currentTheme, setCurrentTheme },
  } = useStores();

  const ThemeIcon = currentTheme === ETheme.DARK ? <SunIcon /> : <MoonIcon />;

  const onClick = () => {
    setCurrentTheme(currentTheme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK);
  };

  return <IconButton onClick={onClick}>{ThemeIcon}</IconButton>;
});
