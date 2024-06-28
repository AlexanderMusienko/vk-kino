import { useStores } from "@/common/hooks/use-stores";
import { MovieItem } from "@/domains/movies/components/MovieItem";
import { Box, Grid, Grow, Typography } from "@mui/material";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import qs from "qs";
import { Link } from "react-router-dom";

export const Favorites = observer(() => {
  const {
    moviesStore: { favMoviesList, getFavMoviesList, favMoviesIDs },
  } = useStores();

  useEffect(() => {
    const favouriteQSIds = qs.stringify(
      { id: favMoviesIDs },
      { indices: false }
    );
    if (favMoviesIDs.length > 0) {
      getFavMoviesList(favouriteQSIds);
    }
  }, []);

  return favMoviesIDs?.length > 0 ? (
    <Grid container alignItems="stretch" spacing={2}>
      {!!favMoviesIDs?.length &&
        favMoviesList?.map(
          (movie) =>
            favMoviesIDs?.includes(+movie.id) && (
              <Grid item xs={12} sm={4} lg={3}>
                <MovieItem key={movie.id} {...movie} />
              </Grid>
            )
        )}
    </Grid>
  ) : (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop={"40vh"}
    >
      <Grow in={true} timeout={1000}>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
          <Typography variant="h2" align="center">
            Вы еще не добавили ни одного фильма в избранное
          </Typography>
          <Typography variant="h2" align="center">
            <Link to="/">К фильмам</Link>
          </Typography>
        </Box>
      </Grow>
    </Box>
  );
});
