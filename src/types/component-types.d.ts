import { ChangeEvent } from "react";
import {
  Experience,
  NavItem,
  Page,
  Project,
  ProjectType,
  Skill,
  Study,
} from "./data-types";

type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>>
>;
type ButtonVariantType = "solid" | "outline";
type ButtonType = "submit" | "button" | "reset";
type LogoSizeType = "small" | "medium" | "large";

type GridBgStyleType = {
  position: "relative" | "absolute" | "fixed";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  margin?: string;
};

type InputType = "text" | "number" | "email";

interface BaseButtonProps {
  type: ButtonType;
  title: string;
  name: string;
  variant: ButtonVariantType;
  children?: React.ReactNode | React.ReactNode[];
  loading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

interface IconOnlyButtonProps extends BaseButtonProps {
  Icon: IconType;
}

interface ButtonWithLabelProps extends BaseButtonProps {
  Icon: IconType;
  label: string;
  loadingMessage?: string;
}

interface GridBgProps {
  rows: number;
  columns: number;
  spacing: number;
  grossor: number;
  style: GridBgStyleType;
}

interface LogoProps {
  size: LogoSizeType;
}

interface LoaderProps {
  direction: "row" | "column";
  load: number;
}

interface LoadingWindowProps {
  load: number;
}

interface NavItemsProps {
  itemsRange: { start: number; end: number };
}
interface NavItemProps {
  navItem: NavItem;
}

interface MobileMenuProps {
  isMenuVisible: boolean;
  toggleMobileMenu: () => void;
}

interface BadgeProps {
  label: string;
  Icon?: IconType;
  index?: number;
}

interface SkillListProps {
  loading: boolean;
  skills: Skill[];
}

interface SkillProps {
  skillData: Skill;
}

interface LoadingBarProps {
  isLoading: boolean;
  variant: "solid" | "outline";
  message?: string;
}

interface JobExperienceProps {
  experienceData: Experience;
}

interface StudyCardProps {
  studyData: Study;
}

interface CarouselProps {
  children: ReactNode[] | ReactNode;
  indicatorsNumber: number;
  slidesHorizontalPosition: number;
  currentSlideIndex: number;
  toggleCarousel: (activeIndex: number) => void;
  next: () => void;
  goBack: () => void;
}

interface ProjectFilterProps {
  filterData: {
    filter: ProjectType;
    toggleFilter: (currentFilter: ProjectType) => void;
  };
}

interface ProjectCardProps {
  projectData: Project;
  toggleModal: (data?: Project) => void;
}

interface ProjectCardListProps {
  projectsLoading: boolean;
  projects: Project[];
}

interface PaginationProps {
  currentPage: number;
  pageButtons: Page[];
  nextPage: () => void;
  prevPage: () => void;
  goExactPage: (page: Page) => void;
}

interface InputBaseProps {
  id: string;
  label: string;
  Icon: IconType;
  children: React.ReactNode | React.ReactNode[];
  errorMessage?: string;
}

interface InputTextProps extends Omit<InputBaseProps, "children"> {
  type: InputType;
  placeholder: string;
  value: string;
  name: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface TextAreaProps extends Omit<InputTextProps, "children" | "type"> {}

interface ModalProps {
  isModalVisible: boolean;
  projectData: Project;
  toggleModal: (data?: Project) => void;
}

export type {
  IconType,
  ButtonVariantType,
  ButtonType,
  LogoSizeType,
  GridBgStyleType,
  InputType,
  BaseButtonProps,
  IconOnlyButtonProps,
  ButtonWithLabelProps,
  GridBgProps,
  LogoProps,
  LoaderProps,
  LoadingWindowProps,
  NavItemsProps,
  NavItemProps,
  MobileMenuProps,
  BadgeProps,
  SkillListProps,
  SkillProps,
  LoadingBarProps,
  JobExperienceProps,
  StudyCardProps,
  CarouselProps,
  ProjectFilterProps,
  ProjectCardProps,
  ProjectCardListProps,
  PaginationProps,
  InputBaseProps,
  InputTextProps,
  TextAreaProps,
  ModalProps,
};
