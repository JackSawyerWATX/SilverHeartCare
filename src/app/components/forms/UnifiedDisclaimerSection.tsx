/**
 * DisclaimerSection Component
 * Liskov Substitution: Single component replaces both service and ride disclaimer sections
 * Single Responsibility: Only renders disclaimer UI
 * Open/Closed: Customizable without modification
 */

import React from "react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { FormField } from "@/app/components/forms/FormComponents";

export interface DisclaimerSectionProps {
  isAcknowledged: boolean;
  onChange: (acknowledged: boolean) => void;
  disclaimerText?: string;
}

const DEFAULT_DISCLAIMER = `
I acknowledge that I have read and understood the terms and conditions of service. 
I certify that all information provided is accurate and complete to the best of my knowledge.
`;

/**
 * Unified disclaimer component for all forms
 */
export const DisclaimerSection: React.FC<DisclaimerSectionProps> = ({
  isAcknowledged,
  onChange,
  disclaimerText = DEFAULT_DISCLAIMER,
}) => {
  return (
    <FormField label="">
      <div className="space-y-4 p-4 border-l-4 border-blue-500 bg-blue-50">
        <p className="text-sm text-gray-700 leading-relaxed">{disclaimerText}</p>

        <div className="flex items-start gap-3">
          <Checkbox
            checked={isAcknowledged}
            onCheckedChange={(checked) => onChange(checked === true)}
            className="mt-1"
            id="disclaimer-checkbox"
          />
          <label htmlFor="disclaimer-checkbox" className="text-sm text-gray-700 cursor-pointer">
            I acknowledge that I have read and agree to the above terms and conditions.
          </label>
        </div>
      </div>
    </FormField>
  );
};

export default DisclaimerSection;
