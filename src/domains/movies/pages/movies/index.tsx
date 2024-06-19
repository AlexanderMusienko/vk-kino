import { useSearchParams } from "react-router-dom";
import { MOVIES_LIST_MOCK } from "../../mock";
import { MovieItem } from "./components/MovieItem";
import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import { LoadingMovies } from "./components/LoadingMovies";
import { useStores } from "@/common/hooks/use-stores";

export const Movies = observer(() => {
  const {
    moviesStore: { isLoading },
  } = useStores();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("filter"));
  return (
    <Grid container alignItems="stretch" spacing={2}>
      {isLoading ? (
        <LoadingMovies />
      ) : (
        MOVIES_LIST_MOCK.docs.map((movie) => (
          <Grid item xs={12} sm={4} lg={3}>
            <MovieItem key={movie.id} {...movie} />
          </Grid>
        ))
      )}
    </Grid>
  );
});
