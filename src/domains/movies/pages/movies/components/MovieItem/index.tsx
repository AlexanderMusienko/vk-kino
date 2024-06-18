import { Card, CardContent, CardHeader, Grow, useTheme } from "@mui/material";
import { FC } from "react";
import { Poster } from "../Poster";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES_MAPPING } from "@/common/constants/routes";

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
  id: movieID,
  year,
  alternativeName,
  ...props
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const linkPath = generatePath(ROUTES_MAPPING.PUBLIC.MOVIE, {
    id: movieID,
  });

  const onCardClick = () => {
    navigate(linkPath);
  };

  return (
    <Grow in={true} timeout={1000}>
      <Card
        onClick={onCardClick}
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
            backgroundColor: theme.palette.background.default,
          }}
          title={name || alternativeName}
          subheader={year}
        />
      </Card>
    </Grow>
  );
};
