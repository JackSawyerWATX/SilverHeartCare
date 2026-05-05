
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { NavigationProvider } from "./context/NavigationContext";
import { getEmailService } from "./services/EmailService";
import App from "./routes/home/App.tsx";
import AboutPage from "./routes/about/AboutPage.tsx";
import TeamPage from "./routes/team/TeamPage.tsx";
import ContactPage from "./routes/contact/ContactPage.tsx";
import MembershipPage from "./routes/membership/MembershipPage.tsx";
import { MembershipSignupPage } from "./routes/membership/MembershipSignupPage.tsx";
import { ServiceRequestPage } from "./routes/service-request/ServiceRequestPage.tsx";
import { RideRequestPage } from "./routes/ride-request/RideRequestPage.tsx";
import GalleryPage from "./routes/gallery/GalleryPage.tsx";
import MediaPage from "./routes/media/MediaPage.tsx";
import "./styles/index.css";

// Initialize email service at app startup (single point of initialization)
try {
  const emailService = getEmailService();
  emailService.initialize();
} catch (error) {
  console.warn("Email service initialization skipped:", error);
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <NavigationProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/membership-signup" element={<MembershipSignupPage />} />
        <Route path="/service-request" element={<ServiceRequestPage />} />
        <Route path="/ride-request" element={<RideRequestPage />} />
      </Routes>
    </NavigationProvider>
  </BrowserRouter>
);
  