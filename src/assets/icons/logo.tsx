import React, { FC, SVGProps } from "react";

import { useTheme } from "@mui/material";

type TLogoProps = {
  color?: string;
} & SVGProps<SVGSVGElement>;

export const Logo: FC<TLogoProps> = ({ color, ...props }) => {
  const theme = useTheme();
  const fillColor = theme.palette.text.primary || color;

  return (
    <svg
      {...props}
      width="60"
      height="60"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="40" r="39.5" stroke={fillColor} />
      <circle cx="18" cy="46" r="11" fill={fillColor} />
      <circle cx="62" cy="34" r="11" fill={fillColor} />
      <circle cx="34" cy="18" r="11" fill={fillColor} />
      <circle cx="46" cy="62" r="11" fill={fillColor} />
      <circle cx="40" cy="40" r="6" fill={fillColor} />
    </svg>
  );
};
