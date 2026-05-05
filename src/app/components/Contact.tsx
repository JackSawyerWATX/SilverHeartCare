import { useState } from "react";
import { toast } from "sonner";
import { STYLES } from "@/styles/styleConstants";
import { validateEmail, validatePhoneNumber, validateRequired } from "@/utils/validators";
import { getEmailService } from "@/services/EmailService";

// Component Interfaces
interface FormData {
  name: string;
  phone: string;
  email: string;
  comments: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  comments?: string;
}

interface PageTitleProps {
  title: string;
}

/**
 * PageTitle Component
 * Single Responsibility: Title rendering only
 */
function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="mb-16">
      <h2
        className="text-5xl md:text-6xl font-bold mb-8 inline-block"
        style={STYLES.PAGE_TITLE}
      >
        {title}
      </h2>
    </div>
  );
}

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

/**
 * FormInput Component
 * Single Responsibility: Text input rendering only
 */
function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: FormInputProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500 bg-red-50" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

interface FormTextAreaProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

/**
 * FormTextArea Component
 * Single Responsibility: Textarea rendering only
 */
function FormTextArea({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
}: FormTextAreaProps) {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={6}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
          error ? "border-red-500 bg-red-50" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

interface SubmitButtonProps {
  isSubmitting: boolean;
}

/**
 * SubmitButton Component
 * Single Responsibility: Button rendering only
 */
function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors focus:outline-none"
    >
      {isSubmitting ? "Sending..." : "Send Message"}
    </button>
  );
}

/**
 * Validate contact form data
 * Single Responsibility: Only validation logic
 */
function validateContactForm(formData: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!validateRequired(formData.name)) {
    errors.name = "Name is required";
  }

  if (!validateRequired(formData.phone)) {
    errors.phone = "Phone number is required";
  } else if (!validatePhoneNumber(formData.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!validateRequired(formData.email)) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!validateRequired(formData.comments)) {
    errors.comments = "Comments/message is required";
  }

  return errors;
}

/**
 * Contact Component
 * Single Responsibility: Form rendering and coordination
 * Dependencies: Uses services via dependency injection (email service)
 */
export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    comments: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // Show toast notification for first error
      const firstErrorKey = Object.keys(validationErrors)[0] as keyof FormErrors;
      const errorMessage = validationErrors[firstErrorKey];
      toast.error(errorMessage);

      return;
    }

    setIsSubmitting(true);

    try {
      // Show loading toast
      const toastId = toast.loading("Sending your message...");

      // Send email using abstracted email service
      const emailService = getEmailService();
      const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;

      await emailService.send({
        templateId,
        variables: {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          description: formData.comments,
          to_email: "silverhearttest@gmail.com",
        },
      });

      // Dismiss loading toast and show success toast
      toast.dismiss(toastId);
      toast.success("Message sent successfully! We'll get back to you soon.", {
        duration: 5000,
      });

      // Reset form only after successful send
      setFormData({
        name: "",
        phone: "",
        email: "",
        comments: "",
      });
      setErrors({});
    } catch (error) {
      // Handle errors
      console.error("Email send error:", error);
      toast.error(
        error instanceof Error
          ? `Error: ${error.message}`
          : "Failed to send message. Please check your connection and try again.",
        { duration: 5000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20" style={STYLES.SILVER_GRADIENT}>
      <div className="max-w-3xl mx-auto px-6">
        <PageTitle title="Contact Us" />

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Have a question or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />

            <FormInput
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="(212) 555-0126"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />

            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <FormTextArea
              label="Comments"
              name="comments"
              placeholder="Please share your message or inquiry..."
              value={formData.comments}
              onChange={handleChange}
              error={errors.comments}
            />

            <div className="flex justify-start pt-4">
              <SubmitButton isSubmitting={isSubmitting} />
            </div>
          </form>

          <p className="text-gray-500 text-sm mt-8">
            <span className="text-red-500">*</span> All fields are required
          </p>
        </div>
      </div>
    </section>
  );
}
