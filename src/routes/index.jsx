import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../components/Landing";
import Experience from "../experienceComponents/experience";
import MainLayout from "../layouts/MainLayout";

const SandboxRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/exp" element={<Experience />} />
      </Route>
    </Routes>
  );
};

export default SandboxRoutes;
