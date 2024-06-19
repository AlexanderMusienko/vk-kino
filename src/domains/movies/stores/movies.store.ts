import { RootStore } from "@/common/stores/root.store";
import { makeAutoObservable } from "mobx";
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
  }

  isLoading: boolean = false;

  paginationInfo?: TPaginationInfo = undefined;

  moviesList: IMovie[] = [];

  currentMovie: IMovie | null = null;

  getCurrentMovie = (id: number) => {
    this.isLoading = true;
    return MovieAPI.getMovie(id)
      .then((res) => {
        this.currentMovie = res;
        this.isLoading = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  };

  getMoviesList = (page: number, filters?: string) => {
    this.isLoading = true;
    return MovieAPI.getMoviesList(page, filters)
      .then((res) => {
        this.moviesList = res.docs;
        this.paginationInfo = {
          currentPage: res.page,
          allPages: res.pages,
        };
        this.isLoading = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  };
}
