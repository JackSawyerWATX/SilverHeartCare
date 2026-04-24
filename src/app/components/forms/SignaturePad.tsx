/**
 * SignaturePad Component
 * Single Responsibility: Captures user signatures via mouse or touch
 * Supports both drawing and clearing the canvas
 */

import React, { useRef, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { SignaturePadProps } from "@/types/requestService";

interface DrawingContext {
  isDrawing: boolean;
  lastX: number;
  lastY: number;
}

export const SignaturePad: React.FC<SignaturePadProps> = ({
  onSignatureCapture,
  onClear,
  isLoading = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<DrawingContext>({
    isDrawing: false,
    lastX: 0,
    lastY: 0,
  });
  const [hasSignature, setHasSignature] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size and styling
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    }
  }, []);

  const getCoordinates = (
    event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ("touches" in event) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const startDrawing = (
    event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    const { x, y } = getCoordinates(event);
    setContext({ isDrawing: true, lastX: x, lastY: y });
  };

  const draw = (
    event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ) => {
    if (!context.isDrawing) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    const { x, y } = getCoordinates(event);

    ctx.beginPath();
    ctx.moveTo(context.lastX, context.lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    setContext({ isDrawing: true, lastX: x, lastY: y });
  };

  const stopDrawing = () => {
    if (context.isDrawing) {
      const canvas = canvasRef.current;
      if (canvas) {
        const signatureData = canvas.toDataURL("image/png");
        onSignatureCapture(signatureData);
        setHasSignature(true);
      }
    }
    setContext({ isDrawing: false, lastX: 0, lastY: 0 });
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx && canvas) {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      setHasSignature(false);
      onClear?.();
      onSignatureCapture("");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Signature *
        </label>
        <p className="text-xs text-gray-500 mb-2">
          Click and drag to sign, or use your finger on a touchscreen
        </p>
      </div>

      <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-40 cursor-crosshair"
          style={{
            touchAction: "none",
            display: "block",
          }}
        />
      </div>

      <div className="flex gap-2 justify-end">
        <Button
          type="button"
          variant="outline"
          onClick={handleClear}
          disabled={!hasSignature || isLoading}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default SignaturePad;
