import * as React from "react";
import { cn } from "@/lib/utils";

interface BaseInputProps {
  type: "text" | "number" | "decimal";
  placeholder: string;
  className?: string;
}

const BaseInput: React.FC<BaseInputProps> = ({ type, placeholder, className }) => {
  const inputType = type === "decimal" ? "number" : type;
  const step = type === "decimal" ? "0.01" : undefined;

  return (
    <input
      className={cn(
        "bg-background text-foreground border-foreground focus:border-secondary h-8 flex-1 rounded-md border-2 px-3 transition-colors focus:outline-none",
        className
      )}
      type={inputType}
      placeholder={placeholder}
      step={step}
    />
  );
};

export default BaseInput;
