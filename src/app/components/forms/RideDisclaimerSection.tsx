/**
 * RideDisclaimerSection Component
 * Single Responsibility: Displays disclaimer and captures user acknowledgment for ride requests
 */

import React from "react";
import { Checkbox } from "../ui/checkbox";

interface RideDisclaimerProps {
  isAcknowledged: boolean;
  onChange: (acknowledged: boolean) => void;
}

export const RideDisclaimerSection: React.FC<RideDisclaimerProps> = ({
  isAcknowledged,
  onChange,
}) => {
  return (
    <div className="space-y-4 rounded-lg border border-yellow-200 bg-yellow-50 p-6">
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">
          Terms and Conditions / Release of Liability
        </h3>

        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Assumption of Risk</h4>
            <p>
              I understand that there may be inherent risks involved in receiving services from Silver
              Heart Care, including transportation, physical assistance, and household activities. I
              voluntarily assume all related risks.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-1">Release and Waiver</h4>
            <p>
              I release and discharge Silver Heart Care, its officers, employees, volunteers, and
              agents from any claims or liabilities arising from my participation in their services,
              including any injury or damage, whether caused by negligence or otherwise.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-1">Indemnification</h4>
            <p>
              I agree to indemnify and hold harmless Silver Heart Care and its representatives from
              any claims or expenses resulting from my participation in their services.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-1">Medical Treatment</h4>
            <p>
              I consent to any necessary medical treatment and understand that I am responsible for
              the costs.
            </p>
          </div>

          <div className="border-t border-yellow-200 pt-4">
            <p className="font-medium text-gray-900">
              By submitting this form, I confirm that I have read, understood, and agree to these
              terms.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-3 pt-2">
        <Checkbox
          id="acknowledge-ride"
          checked={isAcknowledged}
          onCheckedChange={(checked) => onChange(checked as boolean)}
          className="mt-1"
        />
        <label
          htmlFor="acknowledge-ride"
          className="text-sm font-medium text-gray-900 cursor-pointer"
        >
          I acknowledge and agree to the above terms and conditions
        </label>
      </div>
    </div>
  );
};

export default RideDisclaimerSection;
