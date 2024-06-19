export const BASE_URL = "https://api.kinopoisk.dev/v1.4";

export const ENDPOINTS = {
  getMovie: (id: number) => `/movie/${id}`,
  getMoviesWithFilters: (pageNumber: number, filters?: string) =>
    filters
      ? `/movie?limit=50&page=${pageNumber}&${filters}`
      : `/movie?limit=50&page=${pageNumber}`,
};
