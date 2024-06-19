export type TRating = {
  imdb: number;
  kp: number;
};

export type TPoster = {
  url: string | null;
  previewUrl: string | null;
};

export type TGenres = {
  name: string;
};

export interface IMovie {
  id: string;
  name: string | null;
  alternativeName: string | null;
  description: string | null;
  rating: TRating;
  poster: TPoster;
  genres: TGenres[];
  year: number;
}
