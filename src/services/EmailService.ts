/**
 * Email Service Abstraction
 * Dependency Inversion: Abstracts EmailJS implementation
 * Single Responsibility: Only handles email sending
 */

interface EmailServiceConfig {
  serviceId: string;
  publicKey: string;
}

interface EmailSendRequest {
  templateId: string;
  variables: Record<string, any>;
}

interface EmailSendResponse {
  status: number;
  text: string;
}

/**
 * EmailService - Abstraction for email functionality
 * Depends on abstraction, not concrete EmailJS library
 */
export class EmailService {
  private serviceId: string;
  private publicKey: string;
  private initialized = false;

  constructor(config: EmailServiceConfig) {
    this.serviceId = config.serviceId;
    this.publicKey = config.publicKey;
  }

  /**
   * Initialize EmailJS service (call once at app startup)
   */
  initialize(): void {
    if (this.initialized) return;

    if (!(window as any).emailjs) {
      console.warn("EmailJS library not loaded");
      return;
    }

    try {
      (window as any).emailjs.init({
        publicKey: this.publicKey,
      });
      this.initialized = true;
    } catch (error) {
      console.error("Failed to initialize EmailJS:", error);
    }
  }

  /**
   * Send email with template
   */
  async send(request: EmailSendRequest): Promise<EmailSendResponse> {
    if (!this.initialized) {
      throw new Error("EmailService not initialized. Call initialize() first.");
    }

    if (!(window as any).emailjs) {
      throw new Error("EmailJS library not loaded");
    }

    try {
      const result = await (window as any).emailjs.send(
        this.serviceId,
        request.templateId,
        request.variables
      );

      return {
        status: result.status,
        text: result.text,
      };
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : "Failed to send email"
      );
    }
  }
}

/**
 * Factory function to create EmailService instance
 * Uses environment variables for configuration
 */
export const createEmailService = (): EmailService => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !publicKey) {
    throw new Error(
      "Missing EmailJS configuration. Check VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_PUBLIC_KEY in .env"
    );
  }

  return new EmailService({ serviceId, publicKey });
};

/**
 * Global email service instance
 */
let emailServiceInstance: EmailService | null = null;

/**
 * Get or create the global email service instance
 */
export const getEmailService = (): EmailService => {
  if (!emailServiceInstance) {
    emailServiceInstance = createEmailService();
  }
  return emailServiceInstance;
};
