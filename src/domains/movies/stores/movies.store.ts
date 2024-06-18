import { RootStore } from "@/common/stores/root.store";
import { makeAutoObservable } from "mobx";
import { ETheme } from "@/common/types/theme.type";

export class MoviesStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  
}
