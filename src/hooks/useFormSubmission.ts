/**
 * useFormSubmission Hook
 * Single Responsibility: Form submission state management
 * Open/Closed: Generic, works with any form data type
 */

import { useState } from "react";
import { toast } from "sonner";

export interface FormSubmissionState {
  isSubmitting: boolean;
  error: string | null;
}

export interface UseFormSubmissionOptions<T> {
  onSubmit: (data: T) => Promise<void>;
  onSuccess?: (data?: T) => void;
  onError?: (error: Error) => void;
}

/**
 * Hook for managing form submission state and error handling
 */
export function useFormSubmission<T extends Record<string, any>>({
  onSubmit,
  onSuccess,
  onError,
}: UseFormSubmissionOptions<T>) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: T) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await onSubmit(data);
      toast.success("Submission successful!", { duration: 5000 });
      onSuccess?.(data);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Submission failed. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage, { duration: 5000 });
      onError?.(err instanceof Error ? err : new Error(errorMessage));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    error,
    handleSubmit,
    clearError: () => setError(null),
  };
}
