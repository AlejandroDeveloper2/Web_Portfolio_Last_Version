import { supabase } from "@config/supabase";
import { PostgrestError } from "@supabase/supabase-js";

import {
  Pagination,
  Project,
  ProjectType,
  ServerResponse,
} from "@interfaces/data-types";

class ProjectsService {
  constructor() {}

  public async countAllProjects(projectType: ProjectType): Promise<number> {
    let res: number;
    try {
      if (projectType === "Todos") {
        const { data: projects } = (await supabase
          .from("projects")
          .select("*")) as ServerResponse<Project[]>;
        res = projects.length;
      } else {
        const { data: projects } = (await supabase
          .from("projects")
          .select("*")
          .eq("projectType", projectType)) as ServerResponse<Project[]>;
        res = projects.length;
      }
    } catch (error: unknown) {
      const parsedError: PostgrestError = error as PostgrestError;
      throw new Error(parsedError.message);
    }
    return res;
  }

  public async getProjects(
    projectType: ProjectType,
    pagination: Pagination
  ): Promise<ServerResponse<Project[]>> {
    let res: ServerResponse<Project[]>;
    try {
      if (projectType === "Todos") {
        const {
          data: projects,
          status,
          statusText,
        } = await supabase
          .from("projects")
          .select("*")
          .range(pagination.from, pagination.to);
        res = {
          data: projects as Project[],
          status,
          statusText,
        };
      } else {
        const {
          data: projects,
          status,
          statusText,
        } = await supabase
          .from("projects")
          .select("*")
          .eq("projectType", projectType)
          .range(pagination.from, pagination.to);
        res = {
          data: projects as Project[],
          status,
          statusText,
        };
      }
    } catch (error: unknown) {
      const parsedError: PostgrestError = error as PostgrestError;
      throw new Error(parsedError.message);
    }

    return res;
  }
}
export default ProjectsService;
