import { useSearchParams } from "react-router-dom";
import { MOVIES_LIST_MOCK } from "../../mock";
import { MovieItem } from "./components/MovieItem";
import { Grid } from "@mui/material";

export const Movies = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("filter"));
  return (
    <Grid container alignItems="stretch" spacing={2}>
      {MOVIES_LIST_MOCK.docs.map((movie) => (
        <Grid item xs={12} sm={4} lg={3}>
          <MovieItem key={movie.id} {...movie} />
        </Grid>
      ))}
    </Grid>
  );
};
