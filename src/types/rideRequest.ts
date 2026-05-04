/**
 * Types for Ride Request Form
 * Follows Interface Segregation Principle - minimal, focused interfaces
 */

export interface RideRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  pickupAddress: string;
  pickupUnit: string;
  pickupCity: string;
  pickupState: string;
  pickupZip: string;
  dropoffAddress: string;
  dropoffUnit: string;
  dropoffCity: string;
  dropoffState: string;
  dropoffZip: string;
  description: string;
  pickupDateTime: Date;
  returnDateTime?: Date;
  hearAboutUs: string;
  termsAcknowledged: boolean;
  isSigned: boolean;
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
