/**
 * Types for Ride Request Form
 * Follows Interface Segregation Principle - minimal, focused interfaces
 */

export interface RideRequestFormData {
  firstName: string;
  lastName: string;
  pickupAddress: string;
  pickupStreet: string;
  dropoffAddress: string;
  dropoffStreet: string;
  email: string;
  phoneNumber: string;
  description: string;
  pickupDateTime: Date;
  returnDateTime?: Date;
  hearAboutUs: string;
  signature: string;
}

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  data?: RideRequestFormData;
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
