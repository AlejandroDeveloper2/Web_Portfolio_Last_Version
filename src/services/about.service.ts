import { PostgrestError } from "@supabase/supabase-js";

import { supabase } from "@config/supabase";

import {
  Experience,
  ServerResponse,
  Skill,
  Study,
} from "@interfaces/data-types";

class AboutService {
  constructor() {}

  public async getSkills(): Promise<ServerResponse<Skill[]>> {
    let res: ServerResponse<Skill[]>;
    try {
      const {
        data: skills,
        status,
        statusText,
      } = await supabase.from("skills").select("*");

      res = {
        data: skills as Skill[],
        status,
        statusText,
      };
    } catch (error: unknown) {
      const parsedError: PostgrestError = error as PostgrestError;
      throw new Error(parsedError.message);
    }

    return res;
  }

  public async getJobExperiences(): Promise<ServerResponse<Experience[]>> {
    let res: ServerResponse<Experience[]>;
    try {
      const {
        data: experiences,
        status,
        statusText,
      } = await supabase.from("job_experiences").select("*");

      res = {
        data: experiences as Experience[],
        status,
        statusText,
      };
    } catch (error: unknown) {
      const parsedError: PostgrestError = error as PostgrestError;
      throw new Error(parsedError.message);
    }

    return res;
  }

  public async getStudies(): Promise<ServerResponse<Study[]>> {
    let res: ServerResponse<Study[]>;
    try {
      const {
        data: studies,
        status,
        statusText,
      } = await supabase.from("studies").select("*");

      res = {
        data: studies as Study[],
        status,
        statusText,
      };
    } catch (error: unknown) {
      const parsedError: PostgrestError = error as PostgrestError;
      throw new Error(parsedError.message);
    }

    return res;
  }
}

export default AboutService;
