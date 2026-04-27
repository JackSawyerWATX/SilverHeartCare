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
  FormSubmissionResult,
} from "@/types/requestService";

// Styles matching Contact form
const PAGE_TITLE_STYLES = {
  fontFamily: "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
  color: "#3b82f6",
  textShadow: "-3px 4px 4px rgba(0, 0, 0, 0.3)",
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

      // TODO: EMAILJS API INTEGRATION
      // Replace with actual EmailJS service call
      // This will send the service request form data via email
      // Documentation: https://www.emailjs.com/docs/
      // import emailjs from '@emailjs/browser';
      // await emailjs.send(
      //   process.env.REACT_APP_EMAILJS_SERVICE_ID!,
      //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
      //   {
      //     to_email: process.env.REACT_APP_NOTIFICATION_EMAIL!,
      //     from_name: `${submissionData.firstName} ${submissionData.lastName}`,
      //     from_email: submissionData.email,
      //     phone: submissionData.phoneNumber,
      //     service_type: submissionData.serviceType,
      //     address: submissionData.address,
      //     description: submissionData.description,
      //     preferred_time: submissionData.preferredDateTime,
      //   },
      //   process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      // );

      // Simulate API delay for now
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const result: FormSubmissionResult = {
        success: true,
        message: "Service request submitted successfully!",
        data: submissionData,
      };

      toast.success(result.message);
      onSubmitSuccess?.(submissionData);

      // Reset form
      reset();
      setSignature("");
      setIsDisclaimerAcknowledged(false);

      console.log("Form submitted:", submissionData);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to submit form";
      toast.error(errorMessage);
      onSubmitError?.(errorMessage);
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
