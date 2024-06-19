export type TApiResponse<T> = {
  docs: T;
  total: number;
  limit: number;
  page: number;
  pages: number;
};

export type TMovieFilters = {
  genres: string[];
  years: {
    from: number;
    to: number;
  };
  rating: {
    from: number;
    to: number;
  };
};
