/**
 * RideBasicInfoSection Component
 * Single Responsibility: Renders ride request form fields
 * Uses react-hook-form for form state management
 */

import React from "react";
import { useController, Control } from "react-hook-form";

interface RideBasicInfoSectionProps {
  control: Control<any>;
}

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

/**
 * FormField wrapper - Single Responsibility: Layout and error display
 * Matches Service Request form styling
 */
const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  required,
  children,
}) => (
  <div className="mb-6">
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
    {children}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

/**
 * Controlled Input Component - Single Responsibility: Text input with form integration
 */
const ControlledInput: React.FC<{
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}> = ({ name, control, label, type = "text", placeholder, required }) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: required ? `${label} is required` : false },
  });

  return (
    <FormField label={label} error={fieldState.error?.message} required={required}>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          fieldState.error ? "border-red-500 bg-red-50" : "border-gray-300"
        }`}
      />
    </FormField>
  );
};

/**
 * Controlled Textarea Component - Single Responsibility: Text area with form integration
 */
const ControlledTextarea: React.FC<{
  name: string;
  control: Control<any>;
  label: string;
  placeholder?: string;
  required?: boolean;
}> = ({ name, control, label, placeholder, required }) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: required ? `${label} is required` : false },
  });

  return (
    <FormField label={label} error={fieldState.error?.message} required={required}>
      <textarea
        {...field}
        placeholder={placeholder}
        rows={6}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
          fieldState.error ? "border-red-500 bg-red-50" : "border-gray-300"
        }`}
      />
    </FormField>
  );
};

export const RideBasicInfoSection: React.FC<RideBasicInfoSectionProps> = ({ control }) => {
  return (
    <div className="space-y-0">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ControlledInput
          name="firstName"
          control={control}
          label="First Name"
          placeholder="John"
          required
        />
        <ControlledInput
          name="lastName"
          control={control}
          label="Last Name"
          placeholder="Doe"
          required
        />
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ControlledInput
          name="email"
          control={control}
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          required
        />
        <ControlledInput
          name="phoneNumber"
          control={control}
          label="Phone Number"
          type="tel"
          placeholder="(555) 123-4567"
          required
        />
      </div>

      {/* Pickup Address */}
      <ControlledInput
        name="pickupAddress"
        control={control}
        label="Pickup Address"
        placeholder="123 Main Street"
        required
      />
      <ControlledInput
        name="pickupUnit"
        control={control}
        label="Apartment or Unit Number"
        placeholder="Unit 14-304 or Suite 201"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ControlledInput
          name="pickupCity"
          control={control}
          label="City"
          placeholder="Houston"
          required
        />
        <ControlledInput
          name="pickupState"
          control={control}
          label="State"
          placeholder="TX"
          required
        />
        <ControlledInput
          name="pickupZip"
          control={control}
          label="ZIP Code"
          placeholder="77002"
          required
        />
      </div>

      {/* Dropoff Address */}
      <ControlledInput
        name="dropoffAddress"
        control={control}
        label="Dropoff Address"
        placeholder="456 Oak Avenue"
        required
      />
      <ControlledInput
        name="dropoffUnit"
        control={control}
        label="Suite or Unit Number"
        placeholder="Apt 5C or Suite 301"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ControlledInput
          name="dropoffCity"
          control={control}
          label="City"
          placeholder="Houston"
          required
        />
        <ControlledInput
          name="dropoffState"
          control={control}
          label="State"
          placeholder="TX"
          required
        />
        <ControlledInput
          name="dropoffZip"
          control={control}
          label="ZIP Code"
          placeholder="77002"
          required
        />
      </div>

      {/* Service Description */}
      <ControlledTextarea
        name="description"
        control={control}
        label="Describe Service Request"
        placeholder="Please provide details about your ride request..."
        required
      />

      {/* Date and Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ControlledInput
          name="pickupDateTime"
          control={control}
          label="Pickup Date and Time"
          type="datetime-local"
          required
        />
        <ControlledInput
          name="returnDateTime"
          control={control}
          label="Return Date and Time (optional)"
          type="datetime-local"
        />
      </div>

      {/* How did you hear about us */}
      <ControlledInput
        name="hearAboutUs"
        control={control}
        label="How did you hear about us?"
        placeholder="Word of mouth, online search, social media, etc."
      />
    </div>
  );
};

export default RideBasicInfoSection;
