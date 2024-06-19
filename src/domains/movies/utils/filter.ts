import { TMovieFilters } from "@/shared/types/api.type";

export const stringifyMovieFilters = (filters: TMovieFilters) => {
  const { years, genres, rating } = filters;

  const genresString = genres.reduce(
    (acc, genre) => `${acc}&genres.name=${genre}`,
    ""
  );

  return `year=${years.from}-${years.to}&rating.imdb=${rating.from}-${rating.to}${genresString}`;
};
