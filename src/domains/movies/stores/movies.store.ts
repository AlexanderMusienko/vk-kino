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
        console.log("favMoviesIDs", this.favMoviesIDs);
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

  addToFav = (id: number) => {
    console.log("added to fav", id);
    this.favMoviesIDs = [...this.favMoviesIDs, id];
  };

  removeFromFav = (removeID: number) => {
    this.favMoviesIDs = this.favMoviesIDs.filter((id) => id !== removeID);
  };

  setFavMoviesIDs = (ids: number[]) => {
    this.favMoviesIDs = ids;
  };

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

  getFavMoviesList = (qsIDs: string) => {
    this.isLoading = true;
    return MovieAPI.getMoviesListByIDS(qsIDs)
      .then((res) => {
        this.favMoviesList = res.docs;
        this.isLoading = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  };
}
