/**
 * ServiceRequestForm Component
 * Orchestrates the service request form - Dependency Inversion and composition
 * Coordinates BasicInfoSection, DisclaimerSection, and SignaturePad components
 * Matches Contact form design from Contact.tsx
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import BasicInfoSection from "./BasicInfoSection";
import DisclaimerSection from "./DisclaimerSection";
import SignaturePad from "./SignaturePad";
import {
  ServiceRequestFormData,
  ServiceType,
} from "@/types/requestService";

// Styles matching Contact form
const PAGE_TITLE_STYLES = {
  fontFamily: "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
  color: "#3b82f6",
  borderBottom: "4px solid #3b82f6",
  paddingBottom: "8px",
};

interface ServiceRequestFormProps {
  onSubmitSuccess?: (data: ServiceRequestFormData) => void;
  onSubmitError?: (error: string) => void;
}

/**
 * Main form component - coordinates all sub-components
 * Follows Single Responsibility: orchestrates form submission
 * Depends on abstractions (props) not concrete implementations
 */
export const ServiceRequestForm: React.FC<ServiceRequestFormProps> = ({
  onSubmitSuccess,
  onSubmitError,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDisclaimerAcknowledged, setIsDisclaimerAcknowledged] = useState(false);
  const [signature, setSignature] = useState<string>("");

  const { control, handleSubmit, reset, formState: { errors } } = useForm<ServiceRequestFormData>(
    {
      defaultValues: {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        roomNumber: "",
        email: "",
        phoneNumber: "",
        serviceType: ServiceType.OTHER,
        preferredDateTime: new Date(),
        description: "",
        hearAboutUs: "",
        signature: "",
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
  const onSubmit = async (formData: ServiceRequestFormData) => {
    const validationError = validateForm();
    if (validationError) {
      toast.error(validationError);
      onSubmitError?.(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      // Prepare submission data
      const submissionData: ServiceRequestFormData = {
        ...formData,
        signature,
      };

      // Show loading toast
      const toastId = toast.loading("Sending service request...");

      // Format date for email
      const preferredDateTime = new Date(formData.preferredDateTime).toLocaleString();

      // Send email using EmailJS
      const result = await (window as any).emailjs.send(
        "service_vlbveka",        // EmailJS service ID
        "template_qqvs1g3", // Replace with your service request template ID
        {
          from_name: `${submissionData.firstName} ${submissionData.lastName}`,
          from_email: submissionData.email,
          phone: submissionData.phoneNumber,
          service_type: submissionData.serviceType,
          address: submissionData.address,
          city: submissionData.city,
          state: submissionData.state,
          zip: submissionData.zip,
          room_number: submissionData.roomNumber || "N/A",
          preferred_time: preferredDateTime,
          description: submissionData.description,
          hear_about_us: submissionData.hearAboutUs,
          signature: !!submissionData.signature, // Send as boolean: true if signed, false if not
          to_email: "silverhearttest@gmail.com", // Replace with your recipient email
        }
      );

      // Check if email was sent successfully
      if (result.status === 200) {
        // Dismiss loading toast and show success toast
        toast.dismiss(toastId);
        toast.success("Service request submitted successfully! We'll get back to you soon.", {
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
        toast.error("Failed to submit service request. Please try again.", {
          duration: 5000,
        });
        onSubmitError?.("Failed to submit form");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Service request submission error:", error);
      toast.error(
        error instanceof Error
          ? `Error: ${error.message}`
          : "Failed to submit service request. Please check your connection and try again.",
        { duration: 5000 }
      );
      onSubmitError?.(error instanceof Error ? error.message : "Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {/* Page Title - Matching Contact form */}
      <div className="mb-16">
        <h1
          className="text-5xl md:text-6xl font-bold mb-8 inline-block"
          style={PAGE_TITLE_STYLES}
        >
          Service Request Form
        </h1>
      </div>

      {/* Transparent Form Container - on Glass Panel */}
      <div className="space-y-8">
        <p className="text-gray-700 text-lg leading-relaxed">
          Fill out this form to request services from Silver Heart Care. We'll be in touch shortly to confirm your request.
        </p>

        {/* Basic Information Section */}
        <div>
          <BasicInfoSection control={control} />
        </div>

        {/* Disclaimer Section */}
        <DisclaimerSection
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

export default ServiceRequestForm;
