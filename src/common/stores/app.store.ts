import { makeAutoObservable } from "mobx";
import { ETheme, TTheme } from "@/common/types/theme.type";
import { theme } from "@/common/constants/theme";
import { RootStore } from "./root.store";

export class AppStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  currentTheme: TTheme = ETheme.DARK;

  setCurrentTheme = (theme: TTheme) => {
    this.currentTheme = theme;
  };
}
