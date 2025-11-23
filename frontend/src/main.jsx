import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";

import "./index.css";
import Navigation from "./components/Navigation.jsx";
import Landing from "./pages/Landing.jsx";
import JobDetails from "./pages/JobDetails.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  </StrictMode>
);
