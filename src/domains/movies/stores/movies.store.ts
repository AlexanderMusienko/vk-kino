import { RootStore } from "@/common/stores/root.store";
import { makeAutoObservable } from "mobx";
import { IMovie } from "../models/movie.model";
import { MovieAPI } from "../services/movie.service";

export class MoviesStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  isLoading: boolean = false;

  moviesList: IMovie[] = [];

  currentMovie: IMovie | null = null;

  getCurrentMovie = (id: number) => {
    this.isLoading = true;
    return MovieAPI.getMovie(id).then((res) => {
      this.currentMovie = res;
      this.isLoading = false;
    });
  };
}
