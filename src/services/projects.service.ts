import { ClientResponseError } from "pocketbase";

import { Project, ProjectType, ServerResponse } from "@interfaces/data-types";

import { PocketBaseClient } from "@config/pocketbase";

class ProjectsService {
  constructor() {}

  public async countAllProjects(projectType: ProjectType): Promise<number> {
    try {
      const projects = await PocketBaseClient.collection(
        "projects"
      ).getFullList<Project>(
        projectType === "All"
          ? {}
          : { filter: `projectType="${projectType}"`, requestKey: null }
      );
      return projects.length;
    } catch (error: unknown) {
      const pocketbaseError = error as ClientResponseError;
      throw new Error(pocketbaseError.message);
    }
  }

  public async getProjects(
    projectType: ProjectType,
    page: number
  ): Promise<ServerResponse<Project[]>> {
    try {
      const { items } = await PocketBaseClient.collection(
        "projects"
      ).getList<Project>(
        page,
        2,
        projectType === "All"
          ? { requestKey: null }
          : { filter: `projectType="${projectType}"`, requestKey: null }
      );
      return {
        data: items,
        status: 200,
        statusText: "Proyectos cargados correctamente",
      };
    } catch (error: unknown) {
      const pocketbaseError = error as ClientResponseError;
      throw new Error(pocketbaseError.message);
    }
  }
}
export default ProjectsService;
