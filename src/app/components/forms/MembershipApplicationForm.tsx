/**
 * MembershipApplicationForm Component
 * Orchestrates the membership application form
 * Matches styling of ServiceRequestForm and RideRequestForm
 */

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import {
  MembershipApplicationFormData,
  FormSubmissionResult,
} from "@/types/membershipApplication";

// Styles matching other forms
const PAGE_TITLE_STYLES = {
  fontFamily: "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
  color: "#3b82f6",
  textShadow: "-3px 4px 4px rgba(0, 0, 0, 0.3)",
  borderBottom: "4px solid #3b82f6",
  paddingBottom: "8px",
};

interface MembershipApplicationFormProps {
  onSubmitSuccess?: (data: MembershipApplicationFormData) => void;
  onSubmitError?: (error: string) => void;
}

/**
 * Main form component - coordinates form submission
 * Follows Single Responsibility: orchestrates form submission
 * Depends on abstractions (props) not concrete implementations
 */
export const MembershipApplicationForm: React.FC<MembershipApplicationFormProps> = ({
  onSubmitSuccess,
  onSubmitError,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS on component mount
  useEffect(() => {
    if ((window as any).emailjs) {
      (window as any).emailjs.init({
        publicKey: "P04g8tzTaVqqub8L0",
      });
    }
  }, []);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<MembershipApplicationFormData>(
    {
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        grade: "",
        age: "",
        homeAddress: "",
        school: "",
        whyInterested: "",
        uniqueAboutYou: "",
        leadershipInterest: "",
        previousExperienceAndExtracurriculars: "",
      },
    }
  );

  /**
   * Handles form submission
   * Single Responsibility: Coordinates form submission
   */
  const onSubmit = async (formData: MembershipApplicationFormData) => {
    setIsSubmitting(true);
    try {
      // Prepare submission data
      const submissionData: MembershipApplicationFormData = formData;

      // Show loading toast
      const toastId = toast.loading("Sending volunteer application...");

      // Send email using EmailJS
      const result = await (window as any).emailjs.send(
        "service_vlbveka",        // EmailJS service ID
        "template_4aet21w",       // Membership/Volunteer template ID
        {
          from_name: `${submissionData.firstName} ${submissionData.lastName}`,
          from_email: submissionData.email,
          phone: submissionData.phoneNumber,
          grade: submissionData.grade,
          age: submissionData.age,
          home_address: submissionData.homeAddress,
          school: submissionData.school,
          why_interested: submissionData.whyInterested,
          unique_about_you: submissionData.uniqueAboutYou,
          leadership_interest: submissionData.leadershipInterest,
          previous_experience: submissionData.previousExperienceAndExtracurriculars,
          to_email: "silverhearttest@gmail.com",
        }
      );

      toast.dismiss(toastId);

      const successMessage = "Volunteer application submitted successfully!";
      const formResult: FormSubmissionResult = {
        success: true,
        message: successMessage,
        data: submissionData,
      };

      toast.success(successMessage);
      onSubmitSuccess?.(submissionData);

      // Reset form
      reset();

      console.log("Form submitted:", submissionData);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to submit form";
      toast.error(errorMessage);
      onSubmitError?.(errorMessage);
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {/* Page Title - Matching other forms */}
      <div className="mb-16">
        <h1
          className="text-5xl md:text-6xl font-bold mb-8 inline-block"
          style={PAGE_TITLE_STYLES}
        >
          SHC Volunteer Member Application Form
        </h1>
      </div>

      {/* Intro Text */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Thank you for your interest in joining Silver Heart Care! Please fill out this application form completely. We look forward to learning more about you.
      </p>

      {/* Transparent Form Container */}
      <div className="space-y-8">
        {/* Basic Information Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: "First name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="firstName"
                    placeholder="Enter your first name"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.firstName ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                  />
                )}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: "Last name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="lastName"
                    placeholder="Enter your last name"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.lastName ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                  />
                )}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="phoneNumber"
                    placeholder="(123) 456-7890"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.phoneNumber ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                  />
                )}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* Grade */}
            <div>
              <label htmlFor="grade" className="block text-sm font-semibold text-gray-700 mb-2">
                Grade <span className="text-red-500">*</span>
              </label>
              <Controller
                name="grade"
                control={control}
                rules={{ required: "Grade is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="grade"
                    placeholder="e.g., 9th Grade, Freshman"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.grade ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                  />
                )}
              />
              {errors.grade && (
                <p className="text-red-500 text-sm mt-1">{errors.grade.message}</p>
              )}
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                Age <span className="text-red-500">*</span>
              </label>
              <Controller
                name="age"
                control={control}
                rules={{ required: "Age is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.age ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                  />
                )}
              />
              {errors.age && (
                <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
              )}
            </div>

            {/* Home Address */}
            <div className="md:col-span-2">
              <label htmlFor="homeAddress" className="block text-sm font-semibold text-gray-700 mb-2">
                Home Address <span className="text-red-500">*</span>
              </label>
              <Controller
                name="homeAddress"
                control={control}
                rules={{ required: "Home address is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="homeAddress"
                    placeholder="Enter your home address"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.homeAddress ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                  />
                )}
              />
              {errors.homeAddress && (
                <p className="text-red-500 text-sm mt-1">{errors.homeAddress.message}</p>
              )}
            </div>

            {/* School */}
            <div className="md:col-span-2">
              <label htmlFor="school" className="block text-sm font-semibold text-gray-700 mb-2">
                School <span className="text-red-500">*</span>
              </label>
              <Controller
                name="school"
                control={control}
                rules={{ required: "School is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="school"
                    placeholder="Enter your school name"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.school ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                  />
                )}
              />
              {errors.school && (
                <p className="text-red-500 text-sm mt-1">{errors.school.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Application Questions Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-600 pb-2">
            Application Questions
          </h2>

          {/* Why are you interested in joining Silver Heart Care? */}
          <div>
            <label htmlFor="whyInterested" className="block text-sm font-semibold text-gray-700 mb-2">
              Why are you interested in joining Silver Heart Care? <span className="text-red-500">*</span>
            </label>
            <Controller
              name="whyInterested"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="whyInterested"
                  placeholder="Tell us why you're interested in Silver Heart Care..."
                  rows={6}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    errors.whyInterested ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.whyInterested && (
              <p className="text-red-500 text-sm mt-1">{errors.whyInterested.message}</p>
            )}
          </div>

          {/* What is something unique that sets you apart from your peers? */}
          <div>
            <label htmlFor="uniqueAboutYou" className="block text-sm font-semibold text-gray-700 mb-2">
              What is something unique that sets you apart from your peers? <span className="text-red-500">*</span>
            </label>
            <Controller
              name="uniqueAboutYou"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="uniqueAboutYou"
                  placeholder="Tell us what makes you unique..."
                  rows={6}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    errors.uniqueAboutYou ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.uniqueAboutYou && (
              <p className="text-red-500 text-sm mt-1">{errors.uniqueAboutYou.message}</p>
            )}
          </div>

          {/* Are you interested in a leadership position and why? */}
          <div>
            <label htmlFor="leadershipInterest" className="block text-sm font-semibold text-gray-700 mb-2">
              Are you interested in a leadership position and why? <span className="text-red-500">*</span>
            </label>
            <Controller
              name="leadershipInterest"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="leadershipInterest"
                  placeholder="Tell us about your interest in leadership..."
                  rows={6}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    errors.leadershipInterest ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.leadershipInterest && (
              <p className="text-red-500 text-sm mt-1">{errors.leadershipInterest.message}</p>
            )}
          </div>

          {/* Do you have any previous leadership positions and are you involved in any other extracurriculars? */}
          <div>
            <label htmlFor="previousExperienceAndExtracurriculars" className="block text-sm font-semibold text-gray-700 mb-2">
              Do you have any previous leadership positions and are you involved in any other extracurriculars? <span className="text-red-500">*</span>
            </label>
            <Controller
              name="previousExperienceAndExtracurriculars"
              control={control}
              rules={{ required: "This field is required" }}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="previousExperienceAndExtracurriculars"
                  placeholder="Tell us about your previous leadership experience and extracurricular activities..."
                  rows={6}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                    errors.previousExperienceAndExtracurriculars ? "border-red-500 bg-red-50" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.previousExperienceAndExtracurriculars && (
              <p className="text-red-500 text-sm mt-1">{errors.previousExperienceAndExtracurriculars.message}</p>
            )}
          </div>
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
            onClick={() => reset()}
            disabled={isSubmitting}
            className="px-8 py-3"
          >
            Reset Form
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
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

export default MembershipApplicationForm;
