import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useLoader } from "@hooks/index";

import { MainRoutes } from "@routes/index";

import { LoadingWindow } from "@components/index";

const AppRoutes = (): JSX.Element => {
  const load = useLoader();

  if (load <= 100) return <LoadingWindow load={load} />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainRoutes />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
