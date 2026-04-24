# Service Request Form Components

## Overview

This directory contains a complete, SOLID-principle-compliant service request form system for Silver Heart Care. The form is designed with modular, reusable, and testable components.

## Components

### ServiceRequestForm.tsx (Main Component)

The orchestrator component that coordinates all form sections. This component:

- Manages overall form state using `react-hook-form`
- Validates user acknowledgment of disclaimer and signature
- Handles form submission
- Displays validation errors
- Manages loading states

**Usage:**
```tsx
import { ServiceRequestForm } from '@/app/components/forms/ServiceRequestForm';

<ServiceRequestForm
  onSubmitSuccess={(data) => console.log('Success:', data)}
  onSubmitError={(error) => console.log('Error:', error)}
/>
```

### BasicInfoSection.tsx

Renders all data entry fields with form integration. Includes:

- **ControlledInput**: Text input fields with validation
- **ControlledSelect**: Dropdown selections
- **ControlledTextarea**: Multi-line text fields

**Fields:**
- Personal Information (First Name, Last Name)
- Contact Information (Email, Phone)
- Location (Address, Room Number)
- Service Details (Service Type, Preferred Date/Time)
- Request Details (Description, How did you hear about us)

All fields use `react-hook-form` controller pattern for proper integration.

### DisclaimerSection.tsx

Displays legal terms and captures user acknowledgment. Includes:

- Risk assumption clause
- Release and waiver clause
- Indemnification clause
- Medical treatment consent
- Checkbox for acknowledgment

The component is self-contained and reusable in other forms.

### SignaturePad.tsx

Canvas-based signature capture supporting:

- Mouse drawing
- Touch input (mobile/tablet)
- Clear functionality
- Converts signature to PNG data URL

**Props:**
```tsx
interface SignaturePadProps {
  onSignatureCapture: (signatureData: string) => void;
  onClear?: () => void;
  isLoading?: boolean;
}
```

## Types

See `src/types/requestService.ts` for:

- `ServiceType` enum (TECH_ASSISTANCE, HOUSEHOLD_HELP, OTHER)
- `ServiceRequestFormData` interface (main form data structure)
- `FormSubmissionResult` interface
- Component prop interfaces

## SOLID Principles Applied

1. **Single Responsibility**: Each component has one reason to change
2. **Open/Closed**: Components are extensible without modification
3. **Liskov Substitution**: Components follow consistent interfaces
4. **Interface Segregation**: Components only depend on needed props
5. **Dependency Inversion**: Uses prop-based composition, not concrete dependencies

See `SOLID_PRINCIPLES_DOCUMENTATION.ts` for detailed explanation.

## Integration with Routing

1. Import ServiceRequestPage:
```tsx
import { ServiceRequestPage } from '@/routes/service-request/ServiceRequestPage';
```

2. Add to your router configuration:
```tsx
{
  path: '/service-request',
  element: <ServiceRequestPage />
}
```

3. Update RequestButtons.tsx to navigate:
```tsx
const navigate = useNavigate();
<button onClick={() => navigate('/service-request')}>
  Request a Service
</button>
```

See `RequestButtons.EXAMPLE.tsx` for complete example.

## Form Validation

The form includes validation for:

- Required fields (First Name, Last Name, Email, etc.)
- Email format
- Disclaimer acknowledgment
- Signature capture

Errors are displayed both inline and in a summary section.

## Form Submission

Currently, the form simulates a 1-second submission delay. To integrate with a real API:

1. Create an API service file:
```tsx
// services/serviceRequestApi.ts
export async function submitServiceRequest(data: ServiceRequestFormData) {
  const response = await fetch('/api/service-requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return response.json();
}
```

2. Use in ServiceRequestForm:
```tsx
import { submitServiceRequest } from '@/services/serviceRequestApi';

const onSubmit = async (formData: ServiceRequestFormData) => {
  // ... validation ...
  const result = await submitServiceRequest(submissionData);
  // ... handle result ...
};
```

## Styling

Components use:
- **Tailwind CSS** for styling
- **shadcn/ui** components (Button, Input, Select, etc.)
- **Lucide React** icons
- **Sonner** for toast notifications

## Accessibility

- Semantic HTML labels
- Proper form field associations
- Clear error messaging
- Support for touch and mouse input
- ARIA-friendly component structure

## Future Enhancements

1. **File uploads**: Add document upload fields
2. **Conditional fields**: Show/hide fields based on service type
3. **Auto-save**: Save form progress to local storage
4. **Multi-step**: Split into wizard-style steps
5. **Internationalization**: Support multiple languages
6. **Analytics**: Track form completion rates and drop-offs

## Testing

Each component is designed to be easily testable:

```tsx
// Example: Test SignaturePad
import { render, fireEvent } from '@testing-library/react';
import { SignaturePad } from './SignaturePad';

it('should capture signature', () => {
  const onCapture = jest.fn();
  const { container } = render(
    <SignaturePad onSignatureCapture={onCapture} />
  );
  
  const canvas = container.querySelector('canvas');
  fireEvent.mouseDown(canvas);
  fireEvent.mouseMove(canvas);
  fireEvent.mouseUp(canvas);
  
  expect(onCapture).toHaveBeenCalled();
});
```

## Dependencies

- `react-hook-form`: Form state management
- `@radix-ui/*`: Accessible UI primitives
- `shadcn/ui`: Pre-built components
- `sonner`: Toast notifications
- `lucide-react`: Icons
- `tailwindcss`: Styling

## Support

For issues or questions about the form implementation, refer to:
- `SOLID_PRINCIPLES_DOCUMENTATION.ts` for architecture details
- Component comments for implementation specifics
- `react-hook-form` documentation for form integration
