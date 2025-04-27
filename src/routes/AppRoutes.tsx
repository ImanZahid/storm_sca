import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/Home";
import DashboardPage from "@/pages/Dashboard";
import ProfilePage from "@/pages/Profile";
import SettingsPage from "@/pages/Settings";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};
