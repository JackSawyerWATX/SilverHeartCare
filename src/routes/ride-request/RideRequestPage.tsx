/**
 * RideRequestPage Component
 * Single Responsibility: Page wrapper for ride request form
 * Handles routing and page-level concerns
 */

import { RideRequestForm } from "@/app/components/forms/RideRequestForm";
import { RideRequestFormData } from "@/types/rideRequest";
import { NavBar } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export function RideRequestPage() {
  const handleSubmitSuccess = (data: RideRequestFormData) => {
    console.log("Ride request submitted successfully:", data);
    // Handle successful submission - e.g., redirect, show confirmation modal, etc.
  };

  const handleSubmitError = (error: string) => {
    console.error("Ride request submission error:", error);
    // Handle error - e.g., show error modal, log to monitoring service, etc.
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #d1d5db 0%, #d1d5db 10%, #f3f4f6 20%, #f3f4f6 100%)",
      }}
    >
      <NavBar />
      <section
        className="py-20 w-full"
      >
        <div className="w-full px-[200px]">
          {/* Glass Panel */}
          <div className="w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-2xl p-8 md:p-12">
            <RideRequestForm
              onSubmitSuccess={handleSubmitSuccess}
              onSubmitError={handleSubmitError}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default RideRequestPage;
