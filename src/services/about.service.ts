import { ClientResponseError } from "pocketbase";

import { PocketBaseClient } from "@config/pocketbase";

import {
  Experience,
  ServerResponse,
  Skill,
  Study,
} from "@interfaces/data-types";

class AboutService {
  constructor() {}

  public async getSkills(): Promise<ServerResponse<Skill[]>> {
    try {
      const skills = await PocketBaseClient.collection(
        "skills"
      ).getFullList<Skill>({ requestKey: null });
      return {
        data: skills,
        status: 200,
        statusText: "Habilidades cargadas correctamente",
      };
    } catch (error: unknown) {
      const pocketbaseError = error as ClientResponseError;
      throw new Error(pocketbaseError.message);
    }
  }

  public async getJobExperiences(): Promise<ServerResponse<Experience[]>> {
    try {
      const experiences = await PocketBaseClient.collection(
        "jobExperiences"
      ).getFullList<Experience>({ requestKey: null });
      return {
        data: experiences,
        status: 200,
        statusText: "Experiencia laboral cargada correctamente",
      };
    } catch (error: unknown) {
      const pocketbaseError = error as ClientResponseError;
      throw new Error(pocketbaseError.message);
    }
  }

  public async getStudies(): Promise<ServerResponse<Study[]>> {
    try {
      const studies = await PocketBaseClient.collection(
        "studies"
      ).getFullList<Study>({ requestKey: null });
      return {
        data: studies,
        status: 200,
        statusText: "Estudios cargados correctamente",
      };
    } catch (error: unknown) {
      const pocketbaseError = error as ClientResponseError;
      throw new Error(pocketbaseError.message);
    }
  }
}

export default AboutService;
