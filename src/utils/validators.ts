/**
 * Validation Utilities
 * Single Responsibility: Only validation logic
 * Open/Closed: Add new validators without modifying this file
 */

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

/**
 * Email validation - RFC 5322 simplified
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * Phone number validation
 * Accepts: (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890
 */
export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\(\)\+]+$/;
  const digits = phone.replace(/\D/g, "");
  return phoneRegex.test(phone) && digits.length >= 10;
};

/**
 * Required field validation
 */
export const validateRequired = (value: any): boolean => {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return true;
};

/**
 * Minimum length validation
 */
export const validateMinLength = (value: string, min: number): boolean => {
  return value.trim().length >= min;
};

/**
 * ZIP code validation (US)
 */
export const validateZipCode = (zip: string): boolean => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zip.trim());
};

/**
 * Generic form validation
 */
export interface ValidationRule {
  field: string;
  validator: (value: any) => boolean;
  message: string;
}

export const validateFormWithRules = (
  data: Record<string, any>,
  rules: ValidationRule[]
): Record<string, string> => {
  const errors: Record<string, string> = {};

  rules.forEach((rule) => {
    if (!rule.validator(data[rule.field])) {
      errors[rule.field] = rule.message;
    }
  });

  return errors;
};

/**
 * Validators object - namespace for common validators
 */
export const validators = {
  email: validateEmail,
  phoneNumber: validatePhoneNumber,
  required: validateRequired,
  minLength: validateMinLength,
  zipCode: validateZipCode,
};
