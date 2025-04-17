import { Route, Routes } from "react-router-dom";
import { TopPage } from "@/pages/TopPage";

export const Router = () => (
  <Routes>
    <Route path="/" element={<TopPage />} />
  </Routes>
);
