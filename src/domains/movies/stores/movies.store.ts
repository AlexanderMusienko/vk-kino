import { RootStore } from "@/common/stores/root.store";
import { makeAutoObservable, reaction } from "mobx";
import { IMovie } from "../models/movie.model";
import { MovieAPI } from "../services/movie.service";

type TPaginationInfo = {
  currentPage: number;
  allPages: number;
};

export class MoviesStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    this.setFavMoviesIDs(
      JSON.parse(localStorage.getItem("favMoviesIDs") || "[]")
    );

    reaction(
      () => this.favMoviesIDs,
      () => {
        localStorage.setItem("favMoviesIDs", JSON.stringify(this.favMoviesIDs));
      }
    );
  }

  isLoading: boolean = true;

  paginationInfo?: TPaginationInfo = undefined;

  favMoviesIDs: number[] = [];

  favMoviesList: IMovie[] = [];

  moviesList: IMovie[] = [];

  currentMovie: IMovie | null = null;

  setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  };

  addToFav = (id: number) => {
    this.favMoviesIDs = [...this.favMoviesIDs, id];
  };

  removeFromFav = (removeID: number) => {
    this.favMoviesIDs = this.favMoviesIDs.filter((id) => id !== removeID);
  };

  setFavMoviesIDs = (ids: number[]) => {
    this.favMoviesIDs = ids;
  };

  getCurrentMovie = (id: number) => {
    this.setIsLoading(true);
    return MovieAPI.getMovie(id)
      .then((res) => {
        this.currentMovie = res;
        this.setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        this.setIsLoading(false);
      });
  };

  getMoviesList = (page: number, filters?: string) => {
    this.setIsLoading(true);
    MovieAPI.getMoviesList(page, filters)
      .then((res) => {
        this.moviesList = res.docs;
        this.paginationInfo = {
          currentPage: res.page,
          allPages: res.pages,
        };
        this.setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        this.setIsLoading(false);
      });
  };

  getFavMoviesList = (qsIDs: string) => {
    this.setIsLoading(true);
    return MovieAPI.getMoviesListByIDS(qsIDs)
      .then((res) => {
        this.favMoviesList = res.docs;
        this.setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        this.setIsLoading(false);
      });
  };
}
