import { IconButton, useTheme } from "@mui/material";
import { CSSProperties, MouseEvent } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type TFavButtonProps = {
  isFav: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  sx?: CSSProperties;
};

export const FavButton = ({ isFav, onClick, sx }: TFavButtonProps) => {
  const theme = useTheme();

  return (
    <IconButton
      color={isFav ? "error" : "default"}
      sx={{
        ...sx,
        zIndex: 1000,
        color: isFav ? theme.palette.error.main : theme.palette.text.primary,
      }}
      onClick={onClick}
    >
      {isFav ? (
        <FavoriteIcon sx={{ fontSize: "2.5rem" }} />
      ) : (
        <FavoriteBorderIcon sx={{ fontSize: "2.5rem" }} />
      )}
    </IconButton>
  );
};
