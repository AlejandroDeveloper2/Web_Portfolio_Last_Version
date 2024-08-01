import { create } from "zustand";

import { ThemeStore } from "@interfaces/store-types";
import { ThemeModeType } from "@interfaces/data-types";

const themeLS: ThemeModeType =
  (window.localStorage.getItem("theme") as ThemeModeType) ?? "yellow";

const useThemeStore = create<ThemeStore>((set) => ({
  theme: themeLS,
  toggleTheme: (theme: ThemeModeType): void => {
    window.localStorage.setItem("theme", theme);
    set({ theme });
  },
}));

export default useThemeStore;
