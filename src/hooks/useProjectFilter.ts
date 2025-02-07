import { useState } from "react";

import { ProjectType } from "@interfaces/data-types";

const useProjectFilter = () => {
  const [filter, setFilter] = useState<ProjectType>("All");

  const toggleFilter = (currentFilter: ProjectType): void => {
    setFilter(currentFilter);
  };

  return {
    filter,
    toggleFilter,
  };
};
export default useProjectFilter;
