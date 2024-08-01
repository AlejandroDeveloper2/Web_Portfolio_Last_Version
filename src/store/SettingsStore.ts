import { create } from "zustand";

import { SettingsStore } from "@interfaces/store-types";

const useSettingsStore = create<SettingsStore>((set) => ({
  isSettingsBarVisible: false,
  toggleSettingsBar: (): void => {
    set(({ isSettingsBarVisible }) => ({
      isSettingsBarVisible: !isSettingsBarVisible,
    }));
  },
}));

export default useSettingsStore;
