/**
 * BasicInfoSection Component
 * Single Responsibility: Renders basic information form fields
 * Uses react-hook-form for form state management
 */

import React from "react";
import { useController, Control, FieldValues } from "react-hook-form";

interface BasicInfoSectionProps {
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
 * Matches Contact form styling
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
 * Matches Contact form input styling
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
 * Matches Contact form textarea styling
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

/**
 * Controlled Select Component - Single Responsibility: Dropdown with form integration
 * Matches Contact form select styling
 */
const ControlledSelect: React.FC<{
  name: string;
  control: Control<any>;
  label: string;
  options: Array<{ value: string; label: string }>;
  required?: boolean;
}> = ({ name, control, label, options, required }) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: required ? `${label} is required` : false },
  });

  return (
    <FormField label={label} error={fieldState.error?.message} required={required}>
      <select
        {...field}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          fieldState.error ? "border-red-500 bg-red-50" : "border-gray-300"
        }`}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
};

export const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({ control }) => {
  const serviceTypeOptions = [
    { value: "HOUSEHOLD_HELP", label: "Household Help" },
    { value: "OTHER", label: "Other" },
  ];

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

      {/* Location Information */}
      <ControlledInput
        name="address"
        control={control}
        label="Address"
        placeholder="123 Main Street"
        required
      />
      <ControlledInput
        name="roomNumber"
        control={control}
        label="Room Number"
        placeholder="Apt 4B or Room 201"
      />

      {/* Service Details */}
      <ControlledSelect
        name="serviceType"
        control={control}
        label="Service Type"
        options={serviceTypeOptions}
        required
      />
      <ControlledInput
        name="preferredDateTime"
        control={control}
        label="Preferred Date and Time"
        type="datetime-local"
        required
      />

      {/* Request Description */}
      <ControlledTextarea
        name="description"
        control={control}
        label="Description of the Request for Service"
        placeholder="Please provide details about what assistance you need..."
        required
      />
      <ControlledInput
        name="hearAboutUs"
        control={control}
        label="How did you hear about us?"
        placeholder="Word of mouth, online search, social media, etc."
      />
    </div>
  );
};

export default BasicInfoSection;
