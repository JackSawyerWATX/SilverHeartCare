/**
 * RideRequestForm Component
 * Orchestrates the ride request form - Dependency Inversion and composition
 * Coordinates RideBasicInfoSection, RideDisclaimerSection, and SignaturePad components
 * Matches Service Request form design
 */

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import RideBasicInfoSection from "./RideBasicInfoSection";
import RideDisclaimerSection from "./RideDisclaimerSection";
import SignaturePad from "./SignaturePad";
import { RideRequestFormData } from "@/types/rideRequest";

// Styles matching Contact and Service Request forms
const PAGE_TITLE_STYLES = {
  fontFamily: "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
  color: "#3b82f6",
  textShadow: "-3px 4px 4px rgba(0, 0, 0, 0.3)",
  borderBottom: "4px solid #3b82f6",
  paddingBottom: "8px",
};

interface RideRequestFormProps {
  onSubmitSuccess?: (data: RideRequestFormData) => void;
  onSubmitError?: (error: string) => void;
}

/**
 * Main form component - coordinates all sub-components
 * Follows Single Responsibility: orchestrates form submission
 * Depends on abstractions (props) not concrete implementations
 */
export const RideRequestForm: React.FC<RideRequestFormProps> = ({
  onSubmitSuccess,
  onSubmitError,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDisclaimerAcknowledged, setIsDisclaimerAcknowledged] = useState(false);
  const [signature, setSignature] = useState<string>("");

  // Initialize EmailJS on component mount
  useEffect(() => {
    if ((window as any).emailjs) {
      (window as any).emailjs.init({
        publicKey: "P04g8tzTaVqqub8L0",
      });
    }
  }, []);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<RideRequestFormData>(
    {
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        pickupAddress: "",
        pickupUnit: "",
        pickupCity: "",
        pickupState: "",
        pickupZip: "",
        dropoffAddress: "",
        dropoffUnit: "",
        dropoffCity: "",
        dropoffState: "",
        dropoffZip: "",
        description: "",
        pickupDateTime: new Date(),
        returnDateTime: new Date(),
        hearAboutUs: "",
        termsAcknowledged: false,
        isSigned: false,
      },
    }
  );

  /**
   * Validates form before submission
   * Single Responsibility: Business logic validation
   */
  const validateForm = (): string | null => {
    if (!isDisclaimerAcknowledged) {
      return "Please acknowledge the terms and conditions";
    }
    if (!signature) {
      return "Signature is required";
    }
    return null;
  };

  /**
   * Handles form submission
   * Single Responsibility: Coordinates form submission
   */
  const onSubmit = async (formData: RideRequestFormData) => {
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      onSubmitError?.(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      // Prepare submission data
      const submissionData: RideRequestFormData = {
        ...formData,
        termsAcknowledged: isDisclaimerAcknowledged,
        isSigned: !!signature,
      };

      // Show loading toast
      const toastId = toast.loading("Sending ride request...");

      // Format dates for email
      const pickupDateTime = new Date(formData.pickupDateTime).toLocaleString();
      const returnDateTime = formData.returnDateTime 
        ? new Date(formData.returnDateTime).toLocaleString()
        : "Not specified";

      // Send email using EmailJS
      const result = await (window as any).emailjs.send(
        "service_vlbveka",        // EmailJS service ID
        "template_4aet21w",       // Ride Request template ID
        {
          from_name: `${submissionData.firstName} ${submissionData.lastName}`,
          from_email: submissionData.email,
          phone: submissionData.phoneNumber,
          pickup_address: submissionData.pickupAddress,
          pickup_unit: submissionData.pickupUnit || "N/A",
          pickup_city: submissionData.pickupCity,
          pickup_state: submissionData.pickupState,
          pickup_zip: submissionData.pickupZip,
          dropoff_address: submissionData.dropoffAddress,
          dropoff_unit: submissionData.dropoffUnit || "N/A",
          dropoff_city: submissionData.dropoffCity,
          dropoff_state: submissionData.dropoffState,
          dropoff_zip: submissionData.dropoffZip,
          description: submissionData.description,
          pickup_time: pickupDateTime,
          return_time: returnDateTime,
          hear_about_us: submissionData.hearAboutUs,
          terms_acknowledged: submissionData.termsAcknowledged,
          signature: submissionData.isSigned,
          to_email: "silverhearttest@gmail.com",
        }
      );

      // Check if email was sent successfully
      if (result.status === 200) {
        // Dismiss loading toast and show success toast
        toast.dismiss(toastId);
        toast.success("Ride request submitted successfully! We'll get back to you soon.", {
          duration: 5000,
        });

        onSubmitSuccess?.(submissionData);

        // Reset form
        reset();
        setSignature("");
        setIsDisclaimerAcknowledged(false);

        console.log("Form submitted:", submissionData);
      } else {
        // Handle unexpected response
        toast.dismiss(toastId);
        toast.error("Failed to submit ride request. Please try again.", {
          duration: 5000,
        });
        onSubmitError?.("Failed to submit form");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Ride request submission error:", error);
      toast.error(
        error instanceof Error
          ? `Error: ${error.message}`
          : "Failed to submit ride request. Please check your connection and try again.",
        { duration: 5000 }
      );
      onSubmitError?.(error instanceof Error ? error.message : "Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {/* Page Title - Matching Contact and Service Request forms */}
      <div className="mb-16">
        <h1
          className="text-5xl md:text-6xl font-bold mb-8 inline-block"
          style={PAGE_TITLE_STYLES}
        >
          Request a Ride
        </h1>
      </div>

      {/* Intro Text */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Please submit a ride request at least 24 hours in advance. We'll confirm availability and details with you shortly.
      </p>

      {/* Transparent Form Container - on Glass Panel */}
      <div className="space-y-8">
        {/* Basic Information Section */}
        <div>
          <RideBasicInfoSection control={control} />
        </div>

        {/* Disclaimer Section */}
        <RideDisclaimerSection
          isAcknowledged={isDisclaimerAcknowledged}
          onChange={setIsDisclaimerAcknowledged}
        />

        {/* Signature Section */}
        <div className="space-y-6">
          <SignaturePad
            onSignatureCapture={setSignature}
            isLoading={isSubmitting}
            onClear={() => setSignature("")}
          />
        </div>

        {/* Form Errors Summary */}
        {Object.keys(errors).length > 0 && (
          <div className="rounded-lg bg-red-50 border border-red-200 p-4">
            <h4 className="font-semibold text-red-900 mb-2">
              Please fix the following errors:
            </h4>
            <ul className="space-y-1">
              {Object.entries(errors).map(([field, error]) => (
                <li key={field} className="text-sm text-red-700">
                  • {error?.message || `${field} is required`}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-start pt-4 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              reset();
              setSignature("");
              setIsDisclaimerAcknowledged(false);
            }}
            disabled={isSubmitting}
            className="px-8 py-3"
          >
            Reset Form
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting || !isDisclaimerAcknowledged || !signature}
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Request"
            )}
          </Button>
        </div>

        {/* Required Fields Note */}
        <p className="text-gray-500 text-sm">
          <span className="text-red-500">*</span> All fields are required
        </p>
      </div>
    </form>
  );
};

export default RideRequestForm;
