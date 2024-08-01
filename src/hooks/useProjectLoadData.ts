/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { useProjectStore } from "@store/index";
import { useLoading, usePagination, useProjectFilter } from ".";

const useProjectLoadData = () => {
  const { loading: projectsLoading, toggleLoading } = useLoading();
  const { filter, toggleFilter } = useProjectFilter();

  const { totalProjects, getProjects, countAllProjects } = useProjectStore();

  useEffect(() => {
    countAllProjects(filter);
  }, [filter]);

  const {
    from,
    to,
    currentPage,
    pageButtons,
    nextPage,
    prevPage,
    goExactPage,
  } = usePagination(totalProjects);

  useEffect(() => {
    getProjects(filter, { from, to }, toggleLoading);
  }, [filter, currentPage]);

  return {
    pagination: {
      currentPage,
      pageButtons,
      nextPage,
      prevPage,
      goExactPage,
    },
    projectsLoading,
    filter,
    toggleFilter,
  };
};

export default useProjectLoadData;
