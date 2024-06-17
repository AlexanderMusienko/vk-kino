import { theme } from "../constants/theme";

export type TTheme = typeof theme.dark;

export enum ETheme {
  LIGHT = "light",
  DARK = "dark",
}
