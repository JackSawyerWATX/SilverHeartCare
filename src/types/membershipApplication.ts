/**
 * Types for Membership Application Form
 * Follows Interface Segregation Principle - minimal, focused interfaces
 */

export interface MembershipApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  grade: string;
  age: string;
  homeAddress: string;
  school: string;
  whyInterested: string;
  uniqueAboutYou: string;
  leadershipInterest: string;
  previousExperienceAndExtracurriculars: string;
}

export interface FormSubmissionResult {
  success: boolean;
  message: string;
  data?: MembershipApplicationFormData;
  error?: string;
}
