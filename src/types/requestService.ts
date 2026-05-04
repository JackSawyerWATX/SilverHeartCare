/**
 * Types for Service Request Form
 * Follows Interface Segregation Principle - minimal, focused interfaces
 */

export enum ServiceType {
  TECH_ASSISTANCE = "TECH_ASSISTANCE",
  HOUSEHOLD_HELP = "HOUSEHOLD_HELP",
  OTHER = "OTHER",
}

export interface ServiceRequestFormData {
  firstName: string;
  lastName: string;
  address: string;
  roomNumber: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  phoneNumber: string;
  serviceType: ServiceType;
  preferredDateTime: Date;
  description: string;
  hearAboutUs: string;
  signature: string;
}

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  data?: ServiceRequestFormData;
  error?: string;
}

export interface SignatureCoordinates {
  x: number;
  y: number;
}

export interface SignaturePadProps {
  onSignatureCapture: (signatureData: string) => void;
  onClear?: () => void;
  isLoading?: boolean;
}
