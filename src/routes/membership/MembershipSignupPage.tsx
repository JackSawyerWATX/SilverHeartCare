/**
 * MembershipSignupPage Component
 * Single Responsibility: Page wrapper for membership application form
 * Handles routing and page-level concerns
 */

import { MembershipApplicationForm } from "@/app/components/forms/MembershipApplicationForm";
import { MembershipApplicationFormData } from "@/types/membershipApplication";
import { NavBar } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Toaster } from "sonner";
import SEO from "@/components/SEO";
import { SEO_METADATA } from "@/utils/seoMetadata";

export function MembershipSignupPage() {
  const handleSubmitSuccess = (data: MembershipApplicationFormData) => {
    console.log("Form submitted successfully:", data);
    // Handle successful submission - e.g., redirect, show confirmation modal, etc.
  };

  const handleSubmitError = (error: string) => {
    console.error("Form submission error:", error);
    // Handle error - e.g., show error modal, log to monitoring service, etc.
  };

  return (
    <>
      <SEO metadata={SEO_METADATA.membership} />
      <Toaster />
      <div
        className="flex flex-col min-h-screen"
        style={{
          background: "#f3f4f6",
        }}
      >
        <NavBar />
        <section className="py-20 w-full">
          <div className="w-full px-[200px]">
            {/* Glass Panel */}
            <div className="w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-2xl p-8 md:p-12">
              <MembershipApplicationForm
                onSubmitSuccess={handleSubmitSuccess}
                onSubmitError={handleSubmitError}
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MembershipSignupPage;
