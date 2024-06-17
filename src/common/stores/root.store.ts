import { makeAutoObservable } from "mobx";
import { AppStore } from "./app.store";

export class RootStore {
  constructor() {
    makeAutoObservable(this);
    this.appStore = new AppStore(this);
  }

  appStore: AppStore;
}

export const rootStore = new RootStore();
