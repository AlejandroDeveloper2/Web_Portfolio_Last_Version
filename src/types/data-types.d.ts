import { IconType } from "./component-types";

type ThemeModeType = "yellow" | "red" | "blue" | "green";
type ScreenType = "Tablet" | "Mobile" | "Desktop";
type LoadingFunction = (isLoading: boolean, message: string | null) => void;
type ProjectType = "Development" | "Design" | "All";
type StateType = "Finished" | "In Progress";
type DurationMetricType = "Months" | "Years" | "Days";
type FieldErrorType = {
  message: string;
  error: boolean;
};
type WrongInput<T> = Record<T, FieldErrorType>;

interface AnimatedBar {
  scaleY: number;
}

interface NavItem {
  to: string;
  label: string;
}

interface ThemeOption {
  title: string;
  themeValue: ThemeModeType;
}

interface Skill {
  id: number;
  iconUrl: string;
  title: string;
}

interface ServerResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

interface Experience {
  id: number;
  jobTitle: string;
  description: string;
  duration: number;
  durationMetric: DurationMetricType;
  state: StateType;
  finishDate: string;
  company: string;
  projectUrl?: string;
}

interface Study {
  id: number;
  title: string;
  dateRange: string;
  state: StateType;
  certificateLink: string;
}

interface CarouselConfig<T> {
  shownSlidesNumber: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
  slides: T[];
}

interface Project {
  id: number;
  title: string;
  projectImageUrl: string;
  projectType: ProjectType;
  state: StateType;
  description: string;
  usedTechnologies: Skill[];
  codeUrl?: string;
  projectUrl?: string;
}

interface Pagination {
  from: number;
  to: number;
}

interface MediaLink {
  href: string;
  Icon: IconType;
  title: string;
}

interface PageButton {
  index: number;
  from: number;
  to: number;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type {
  ThemeModeType,
  ScreenType,
  LoadingFunction,
  ProjectType,
  FieldErrorType,
  StateType,
  DurationMetricType,
  WrongInput,
  AnimatedBar,
  NavItem,
  ThemeOption,
  Skill,
  ServerResponse,
  Experience,
  Study,
  CarouselConfig,
  Project,
  Pagination,
  MediaLink,
  PageButton,
  ContactFormData,
};
