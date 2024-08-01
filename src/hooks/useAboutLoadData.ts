/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useAboutStore } from "@store/index";
import { useLoading } from ".";

const useAboutLoadData = () => {
  const { loading: skillsLoading, toggleLoading } = useLoading();
  const {
    loading: experiencesLoading,
    toggleLoading: toggleExperiencesLoading,
  } = useLoading();
  const { loading: studiesLoading, toggleLoading: toggleStudiesLoading } =
    useLoading();

  const {
    skills,
    jobExperiences,
    studies,
    getSkills,
    getJobExperiences,
    getStudies,
  } = useAboutStore();

  useEffect(() => {
    if (skills.length === 0) getSkills(toggleLoading);
  }, []);

  useEffect(() => {
    if (jobExperiences.length === 0)
      getJobExperiences(toggleExperiencesLoading);
  }, []);

  useEffect(() => {
    if (studies.length === 0) getStudies(toggleStudiesLoading);
  }, []);

  return {
    skillsLoading,
    experiencesLoading,
    studiesLoading,
  };
};

export default useAboutLoadData;
