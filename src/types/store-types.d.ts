import {
  Skill,
  ThemeModeType,
  LoadingFunction,
  Experience,
  Study,
  Project,
  ProjectType,
  ContactFormData,
} from "./data-types";

interface ThemeStore {
  theme: ThemeModeType;
  toggleTheme: (mode: ThemeModeType) => void;
}

interface SettingsStore {
  isSettingsBarVisible: boolean;
  toggleSettingsBar: () => void;
}

interface AboutStore {
  skills: Skill[];
  jobExperiences: Experience[];
  studies: Study[];
  getSkills: (toggleLoading: LoadingFunction) => Promise<void>;
  getJobExperiences: (toggleLoading: LoadingFunction) => Promise<void>;
  getStudies: (toggleLoading: LoadingFunction) => Promise<void>;
}

interface ProjectStore {
  projects: Project[];
  totalProjects: number;
  countAllProjects: (projectType: ProjectType) => Promise<void>;
  getProjects: (
    projectType: ProjectType,
    page: number,
    toggleLoading: LoadingFunction
  ) => Promise<void>;
}

interface ContactStore {
  sendContactEmail: (
    formParams: ContactFormData,
    toggleLoading: LoadingFunction
  ) => Promise<void>;
}

export type {
  ThemeStore,
  SettingsStore,
  AboutStore,
  ProjectStore,
  ContactStore,
};
