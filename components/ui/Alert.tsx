"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  XCircle,
  LucideIcon,
} from "lucide-react";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default:
          "bg-white text-[#101010] dark:bg-[#131C31] dark:text-[#94A9C9] border-gray-200 dark:border-[#222F43]",
        success:
          "border-green-500/50 text-green-600 dark:text-green-400 [&>svg]:text-green-600 dark:[&>svg]:text-green-400 bg-green-50 dark:bg-green-500/10",
        error:
          "border-red-500/50 text-red-600 dark:text-red-400 [&>svg]:text-red-600 dark:[&>svg]:text-red-400 bg-red-50 dark:bg-red-500/10",
        warning:
          "border-yellow-500/50 text-yellow-600 dark:text-yellow-400 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400 bg-yellow-50 dark:bg-yellow-500/10",
        info: "border-blue-500/50 text-blue-600 dark:text-blue-400 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400 bg-blue-50 dark:bg-blue-500/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const icons: Record<string, LucideIcon> = {
  default: AlertCircle,
  error: XCircle,
  success: CheckCircle2,
  warning: AlertCircle,
  info: Info,
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: LucideIcon | React.ReactElement;
  onClose?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { className, variant = "default", icon, children, onClose, ...props },
    ref
  ) => {
    const IconComponent = icon || icons[variant || "default"];
    const Icon = React.isValidElement(IconComponent)
      ? IconComponent
      : React.createElement(IconComponent as LucideIcon, {
          className: "h-4 w-4",
        });

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {Icon}
        <div className="flex-1">{children}</div>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#ffe400] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground dark:ring-offset-[#131C31]"
          >
            <XCircle className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));

AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
));

AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
