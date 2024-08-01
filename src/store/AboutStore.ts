import { create } from "zustand";
import { toast } from "react-toastify";

import { AboutStore } from "@interfaces/store-types";
import { LoadingFunction } from "@interfaces/data-types";

import AboutService from "@services/about.service";

const aboutService = new AboutService();

const useAboutStore = create<AboutStore>((set) => ({
  skills: [],
  jobExperiences: [],
  studies: [],
  getSkills: async (toggleLoading: LoadingFunction): Promise<void> => {
    toggleLoading(true, "Cargando habilidades...");
    try {
      const { data: skills } = await aboutService.getSkills();
      set({ skills });
    } catch (error: unknown) {
      const parsedError: Error = error as Error;
      toast.error(parsedError.message);
    } finally {
      toggleLoading(false, null);
    }
  },
  getJobExperiences: async (toggleLoading: LoadingFunction): Promise<void> => {
    toggleLoading(true, "Cargando experiencias laborales...");
    try {
      const { data: jobExperiences } = await aboutService.getJobExperiences();
      set({ jobExperiences });
    } catch (error: unknown) {
      const parsedError: Error = error as Error;
      toast.error(parsedError.message);
    } finally {
      toggleLoading(false, null);
    }
  },
  getStudies: async (toggleLoading: LoadingFunction): Promise<void> => {
    toggleLoading(true, "Cargando estudios...");
    try {
      const { data: studies } = await aboutService.getStudies();
      set({ studies });
    } catch (error: unknown) {
      const parsedError: Error = error as Error;
      toast.error(parsedError.message);
    } finally {
      toggleLoading(false, null);
    }
  },
}));
export default useAboutStore;
