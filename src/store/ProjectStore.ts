import { create } from "zustand";
import { toast } from "react-toastify";

import { ProjectStore } from "@interfaces/store-types";
import { LoadingFunction } from "@interfaces/data-types";

import ProjectsService from "@services/projects.service";

const projectsService = new ProjectsService();

const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  totalProjects: 0,
  countAllProjects: async (projectType): Promise<void> => {
    try {
      const totalProjects = await projectsService.countAllProjects(projectType);
      set({ totalProjects });
    } catch (error: unknown) {
      const parsedError: Error = error as Error;
      toast.error(parsedError.message);
    }
  },
  getProjects: async (
    projectType,
    page,
    toggleLoading: LoadingFunction
  ): Promise<void> => {
    toggleLoading(true, "Cargando proyectos...");
    try {
      const { data: projects } = await projectsService.getProjects(
        projectType,
        page
      );
      set({ projects });
    } catch (error: unknown) {
      const parsedError: Error = error as Error;
      toast.error(parsedError.message);
    } finally {
      toggleLoading(false, null);
    }
  },
}));
export default useProjectStore;
