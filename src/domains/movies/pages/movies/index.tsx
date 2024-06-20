import { MovieItem } from "./components/MovieItem";
import { Grid, Pagination } from "@mui/material";
import { observer } from "mobx-react-lite";
import { LoadingMovies } from "./components/LoadingMovies";
import { useStores } from "@/common/hooks/use-stores";
import { FiltersControl } from "./components/FiltersControl";
import { TMovieFilters } from "@/shared/types/api.type";
import { ChangeEvent, useEffect, useState } from "react";
import { stringifyMovieFilters } from "../../utils/filter";

const initialFilters: TMovieFilters = {
  genres: [],
  years: {
    from: 1900,
    to: 2024,
  },
  rating: {
    from: 0,
    to: 10,
  },
};

const initialQSFilters = stringifyMovieFilters(initialFilters);

export const Movies = observer(() => {
  const {
    moviesStore: { isLoading, moviesList, getMoviesList, paginationInfo },
  } = useStores();

  const [filters, setFilters] = useState<string>(initialQSFilters);
  const [page, setPage] = useState<number>(1);

  const onFiltersApply = (filters: TMovieFilters) => {
    setFilters(stringifyMovieFilters(filters));
  };

  const onPaginationChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (page === 1) {
      getMoviesList(page, filters);
    }
    setPage(1);
  }, [filters]);

  useEffect(() => {
    if (page !== 1 && paginationInfo?.currentPage) {
      getMoviesList(page, filters);
    }
  }, [page]);

  return (
    <Grid container alignItems="stretch" spacing={2}>
      <Grid item xs={12}>
        <FiltersControl onClick={onFiltersApply} />
      </Grid>
      {isLoading ? (
        <LoadingMovies />
      ) : (
        moviesList.length > 0 &&
        moviesList.map((movie) => (
          <Grid item xs={12} sm={4} lg={3}>
            <MovieItem key={movie.id} {...movie} />
          </Grid>
        ))
      )}
      <Grid
        item
        xs={12}
        justifyContent="center"
        display="flex"
        paddingBottom={"10px"}
      >
        <Pagination
          count={paginationInfo?.allPages || 1}
          page={paginationInfo?.currentPage || 1}
          onChange={onPaginationChange}
        />
      </Grid>
    </Grid>
  );
});
