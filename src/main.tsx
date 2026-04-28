
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./routes/home/App.tsx";
import AboutPage from "./routes/about/AboutPage.tsx";
import TeamPage from "./routes/team/TeamPage.tsx";
import ContactPage from "./routes/contact/ContactPage.tsx";
import MembershipPage from "./routes/membership/MembershipPage.tsx";
import { MembershipSignupPage } from "./routes/membership/MembershipSignupPage.tsx";
import { ServiceRequestPage } from "./routes/service-request/ServiceRequestPage.tsx";
import { RideRequestPage } from "./routes/ride-request/RideRequestPage.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/membership" element={<MembershipPage />} />
      <Route path="/membership-signup" element={<MembershipSignupPage />} />
      <Route path="/service-request" element={<ServiceRequestPage />} />
      <Route path="/ride-request" element={<RideRequestPage />} />
    </Routes>
  </BrowserRouter>
);
  