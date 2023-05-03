import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoute, publicRoute } from "../routes";
import { HOME_ROUTE } from "../utils/const";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoute.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      {privateRoute.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      <Route path="/*" element={<Navigate to={HOME_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
