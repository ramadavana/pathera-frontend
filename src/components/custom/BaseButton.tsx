import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const baseButtonVariants = cva(
  "h-8 px-3 rounded-md font-medium transition-colors focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none cursor-pointer disabled:cursor-not-allowed flex items-center justify-center text-sm w-full text-base whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-primary text-background hover:bg-primary-400",
        secondary: "bg-secondary text-background hover:bg-secondary-400",
        success: "bg-success text-background hover:bg-success-400",
        destructive: "bg-destructive text-background hover:bg-destructive-400",
        warning: "bg-warning text-background hover:bg-warning-400",
        info: "bg-info text-background hover:bg-info-400",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface BaseButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof baseButtonVariants> {}

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(baseButtonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

BaseButton.displayName = "BaseButton";

export { BaseButton, baseButtonVariants };
