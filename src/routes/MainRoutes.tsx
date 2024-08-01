import { Route, Routes } from "react-router-dom";

import { MainLayout } from "@layout/index";
import { MainPage } from "@pages/index";

const MainRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
