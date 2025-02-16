import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#ffe400] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[#101010] text-white hover:bg-[#101010]/80 dark:bg-[#94A9C9] dark:text-[#131C31] dark:hover:bg-[#94A9C9]/80",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-[#131C31] dark:text-[#94A9C9] dark:hover:bg-[#131C31]/80",
        success:
          "bg-green-100 text-green-800 hover:bg-green-100/80 dark:bg-green-500/20 dark:text-green-400 dark:hover:bg-green-500/30",
        error:
          "bg-red-100 text-red-800 hover:bg-red-100/80 dark:bg-red-500/20 dark:text-red-400 dark:hover:bg-red-500/30",
        warning:
          "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 dark:bg-yellow-500/20 dark:text-yellow-400 dark:hover:bg-yellow-500/30",
        info: "bg-blue-100 text-blue-800 hover:bg-blue-100/80 dark:bg-blue-500/20 dark:text-blue-400 dark:hover:bg-blue-500/30",
        outline:
          "border border-[#ffe400] text-[#ffe400] dark:border-[#ffe400] dark:text-[#ffe400]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
