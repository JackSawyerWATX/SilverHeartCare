/**
 * RideRequestForm Component
 * Orchestrates the ride request form - Dependency Inversion and composition
 * Coordinates RideBasicInfoSection, RideDisclaimerSection, and SignaturePad components
 * Matches Service Request form design
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import RideBasicInfoSection from "./RideBasicInfoSection";
import RideDisclaimerSection from "./RideDisclaimerSection";
import SignaturePad from "./SignaturePad";
import { RideRequestFormData, FormSubmissionResult } from "@/types/rideRequest";

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

  const { control, handleSubmit, reset, formState: { errors } } = useForm<RideRequestFormData>(
    {
      defaultValues: {
        firstName: "",
        lastName: "",
        pickupAddress: "",
        pickupStreet: "",
        dropoffAddress: "",
        dropoffStreet: "",
        email: "",
        phoneNumber: "",
        description: "",
        pickupDateTime: new Date(),
        returnDateTime: undefined,
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
        signature,
      };

      // TODO: UBER HEALTH API INTEGRATION
      // Replace with actual Uber Health API call
      // This will request a ride through Uber Health's transportation service
      // Documentation: https://developer.uber.com/docs/riders/references/api/v2_1-requests-post
      // const response = await fetch('https://api.uber.com/v2/requests', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${process.env.REACT_APP_UBER_HEALTH_TOKEN}`,
      //   },
      //   body: JSON.stringify({
      //     pickup_latitude: submissionData.pickupLat,
      //     pickup_longitude: submissionData.pickupLon,
      //     dropoff_latitude: submissionData.dropoffLat,
      //     dropoff_longitude: submissionData.dropoffLon,
      //     product_id: 'uber-health',
      //     scheduled_time: submissionData.pickupDateTime.getTime(),
      //     notes: submissionData.description,
      //   })
      // });
      // const result = await response.json();

      // Simulate API delay for now
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const result: FormSubmissionResult = {
        success: true,
        message: "Ride request submitted successfully!",
        data: submissionData,
      };

      toast.success(result.message);
      onSubmitSuccess?.(submissionData);

      // Reset form
      reset();
      setSignature("");
      setIsDisclaimerAcknowledged(false);
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
      {/* Page Title - Matching Contact and Service Request forms */}
      <div className="mb-16">
        <h1
          className="text-5xl md:text-6xl font-bold mb-8 inline-block"
          style={PAGE_TITLE_STYLES}
        >
          Ride Request Form
        </h1>
      </div>

      {/* Intro Text */}
      <p className="text-gray-700 text-base mb-8 leading-relaxed">
        Please submit a form at least 24 hours prior to the ride. To ensure smooth communication,
        please actively check your phone and email for any messages from the SHC team.
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
