import { useState, useEffect } from "react";
import { toast } from "sonner";

// Styles and Constraints

const SECTION_BACKGROUND = "linear-gradient(to bottom, #d1d5db 0%, #d1d5db 10%, #f3f4f6 20%, #f3f4f6 100%)";

const PAGE_TITLE_STYLES = {
  fontFamily: "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
  color: "#3b82f6",
  textShadow: "-3px 4px 4px rgba(0, 0, 0, 0.3)",
  borderBottom: "4px solid #3b82f6",
  paddingBottom: "8px",
};

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

// Reusable Components

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="mb-16">
      <h2
        className="text-5xl md:text-6xl font-bold mb-8 inline-block"
        style={PAGE_TITLE_STYLES}
      >
        {title}
      </h2>
    </div>
  );
}

function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
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

function FormTextArea({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}) {
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

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
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

// Validation Utilities

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhoneNumber(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\(\)\+]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
}

function validateForm(formData: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!validatePhoneNumber(formData.phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.comments.trim()) {
    errors.comments = "Comments/message is required";
  }

  return errors;
}

// Main Component

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    comments: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS on component mount
  useEffect(() => {
    if ((window as any).emailjs) {
      (window as any).emailjs.init({
        publicKey: "P04g8tzTaVqqub8L0",
      });
    }
  }, []);

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
    const validationErrors = validateForm(formData);

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

      // Send email using EmailJS
      const result = await (window as any).emailjs.send(
        "service_vlbveka",        // EmailJS service ID
        "template_qqvs1g3",       // Same template as Service Request - only uses provided fields
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          description: formData.comments,
          to_email: "silverhearttest@gmail.com", // email address to receive messages
        }
      );

      // Check if email was sent successfully
      if (result.status === 200) {
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
      } else {
        // Handle unexpected response
        toast.dismiss(toastId);
        toast.error("Failed to send message. Please try again.", {
          duration: 5000,
        });
      }
    } catch (error) {
      // Handle network or other errors
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
    <section
      className="py-20"
      style={{ background: SECTION_BACKGROUND }}
    >
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
