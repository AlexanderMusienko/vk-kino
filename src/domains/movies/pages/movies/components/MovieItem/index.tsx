import { Card, CardContent, CardHeader, useTheme } from "@mui/material";
import { FC } from "react";
import { Poster } from "../Poster";

type TMovieItemProps = {
  name: string;
  poster: { url: string; previewUrl: string };
  rating: { imdb: number };
  id: number;
  year: string;
  alternativeName: string;
};

export const MovieItem: FC<TMovieItemProps> = ({
  name,
  poster,
  rating,
  id,
  year,
  alternativeName,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        cursor: "pointer",
        position: "relative",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: {
          xs: "500px",
          sm: "400px",
          md: "450px",
        },
      }}
    >
      <CardContent>
        <Poster
          rating={{ score: rating.imdb, reviewer: "imdb" }}
          src={poster?.previewUrl || poster?.url}
        />
      </CardContent>
      <CardHeader
        sx={{
          zIndex: 5,
          height: "20%",
          background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.default})`,
        }}
        title={name || alternativeName}
        subheader={year}
      />
    </Card>
  );
};
