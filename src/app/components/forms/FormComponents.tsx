/**
 * Shared Form Components
 * Single Responsibility: Each component handles ONE input type
 * Open/Closed: Base implementations don't change, only extend through composition
 * Liskov Substitution: All implement consistent FormComponentProps interface
 * Interface Segregation: Each component only receives needed props
 */

import React from "react";
import { useController, Control, FieldValues, Path } from "react-hook-form";

/**
 * FormField Wrapper Component
 * Single Responsibility: Layout and error display only
 */
export interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  helpText?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  required,
  children,
  helpText,
}) => (
  <div className="mb-6">
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
      {required && <span className="text-red-500"> *</span>}
    </label>
    {children}
    {helpText && <p className="text-gray-500 text-xs mt-1">{helpText}</p>}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

/**
 * Base props for controlled components
 */
export interface ControlledComponentProps<T extends FieldValues = any> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  helpText?: string;
}

/**
 * Controlled Input Component
 * Single Responsibility: Text input with form integration
 */
export const ControlledInput = React.forwardRef<
  HTMLInputElement,
  ControlledComponentProps & {
    type?: string;
  }
>(({ name, control, label, type = "text", required, disabled, placeholder, helpText }, ref) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: required ? `${label} is required` : false },
  });

  return (
    <FormField label={label} error={fieldState.error?.message} required={required} helpText={helpText}>
      <input
        ref={ref}
        {...field}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
          fieldState.error ? "border-red-500 bg-red-50" : "border-gray-300"
        } ${disabled ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""}`}
      />
    </FormField>
  );
});

ControlledInput.displayName = "ControlledInput";

/**
 * Controlled Textarea Component
 * Single Responsibility: Multi-line text input with form integration
 */
export const ControlledTextarea = React.forwardRef<
  HTMLTextAreaElement,
  ControlledComponentProps & {
    rows?: number;
  }
>(({ name, control, label, required, disabled, placeholder, helpText, rows = 6 }, ref) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: required ? `${label} is required` : false },
  });

  return (
    <FormField label={label} error={fieldState.error?.message} required={required} helpText={helpText}>
      <textarea
        ref={ref}
        {...field}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-colors ${
          fieldState.error ? "border-red-500 bg-red-50" : "border-gray-300"
        } ${disabled ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""}`}
      />
    </FormField>
  );
});

ControlledTextarea.displayName = "ControlledTextarea";

/**
 * Controlled Select Component
 * Single Responsibility: Dropdown selection with form integration
 */
export interface SelectOption {
  value: string;
  label: string;
}

export const ControlledSelect = React.forwardRef<
  HTMLSelectElement,
  ControlledComponentProps & {
    options: SelectOption[];
    defaultOption?: string;
  }
>(({ name, control, label, required, disabled, options, helpText, defaultOption }, ref) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: required ? `${label} is required` : false },
  });

  return (
    <FormField label={label} error={fieldState.error?.message} required={required} helpText={helpText}>
      <select
        ref={ref}
        {...field}
        disabled={disabled}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
          fieldState.error ? "border-red-500 bg-red-50" : "border-gray-300"
        } ${disabled ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""}`}
      >
        <option value="">{defaultOption || `Select ${label.toLowerCase()}`}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FormField>
  );
});

ControlledSelect.displayName = "ControlledSelect";

/**
 * Controlled Checkbox Component
 * Single Responsibility: Checkbox with form integration
 */
export const ControlledCheckbox: React.FC<
  ControlledComponentProps & {
    checkboxLabel?: string;
  }
> = ({ name, control, label, required, disabled, helpText, checkboxLabel }) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: { required: required ? `${label} is required` : false },
  });

  return (
    <FormField label={label} error={fieldState.error?.message} required={required} helpText={helpText}>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          {...field}
          checked={field.value ?? false}
          disabled={disabled}
          className={`w-4 h-4 rounded cursor-pointer ${
            disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
        />
        {checkboxLabel && (
          <label className="text-sm text-gray-700 cursor-pointer">{checkboxLabel}</label>
        )}
      </div>
    </FormField>
  );
};

/**
 * Error Message Component
 * Single Responsibility: Display form errors consistently
 */
export const FormError: React.FC<{ message?: string }> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
      <p className="text-sm text-red-700">
        <span className="font-semibold">Error:</span> {message}
      </p>
    </div>
  );
};

/**
 * Success Message Component
 * Single Responsibility: Display success feedback consistently
 */
export const FormSuccess: React.FC<{ message?: string }> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
      <p className="text-sm text-green-700">
        <span className="font-semibold">Success:</span> {message}
      </p>
    </div>
  );
};
