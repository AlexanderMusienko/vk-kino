import { Card, CardContent, CardHeader, Grow, useTheme } from "@mui/material";
import { FC, MouseEvent } from "react";
import { Poster } from "../../pages/movies/components/Poster";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES_MAPPING } from "@/common/constants/routes";
import { observer } from "mobx-react-lite";
import { useStores } from "@/common/hooks/use-stores";
import { FavButton } from "@/shared/ui/FavButton";

type TMovieItemProps = {
  name: string | null;
  poster: { url: string | null; previewUrl: string | null };
  rating: { imdb: number };
  id: string;
  year: number;
  alternativeName: string | null;
};

export const MovieItem: FC<TMovieItemProps> = observer(
  ({ name, poster, rating, id: movieID, year, alternativeName, ...props }) => {
    const {
      moviesStore: { favMoviesIDs, removeFromFav, addToFav },
    } = useStores();

    const movieIDNumber = Number(movieID);
    const theme = useTheme();
    const navigate = useNavigate();
    const isFav = favMoviesIDs.includes(movieIDNumber);

    const toggleFav = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      isFav ? removeFromFav(movieIDNumber) : addToFav(movieIDNumber);
    };

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
              rating={{ score: rating?.imdb, reviewer: "imdb" }}
              src={poster?.previewUrl || poster?.url}
            />
            <FavButton
              sx={{
                position: "absolute",
                top: "10px",
                right: "15px",
              }}
              isFav={isFav}
              onClick={toggleFav}
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
          ></CardHeader>
        </Card>
      </Grow>
    );
  }
);
