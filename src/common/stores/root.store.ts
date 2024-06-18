import { makeAutoObservable } from "mobx";
import { AppStore } from "@/domains/app/stores/app.store";
import { MoviesStore } from "@/domains/movies/stores/movies.store";

export class RootStore {
  constructor() {
    makeAutoObservable(this);
    this.appStore = new AppStore(this);
    this.moviesStore = new MoviesStore(this);
  }

  appStore: AppStore;
  moviesStore: MoviesStore;
}

export const rootStore = new RootStore();
