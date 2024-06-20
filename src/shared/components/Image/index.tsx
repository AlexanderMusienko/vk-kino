import { FC } from "react";
import { NoImage } from "@/assets/icons/no-image";
import { SxProps, Theme } from "@mui/material";
import { S } from "./ui";

type TImageProps = {
  src?: string | null;
  alt?: string;
  imgSx?: SxProps<Theme>;
  sx?: SxProps<Theme>;
};

export const Image: FC<TImageProps> = ({ src, alt, imgSx, sx }) => {
  return (
    <S.ImageContainer sx={sx}>
      {src ? <S.Image src={src} alt={alt} sx={imgSx} /> : <NoImage />}
    </S.ImageContainer>
  );
};
