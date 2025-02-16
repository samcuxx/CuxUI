import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-[#66768f]">
            {icon}
          </div>
        )}
        <input
          className={cn(
            'flex h-10 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe400] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#222F43] dark:bg-[#131C31] dark:ring-offset-[#131C31] dark:placeholder:text-[#66768f] dark:focus-visible:ring-[#ffe400]',
            error && 'border-red-500 dark:border-red-500',
            icon && 'pl-10',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input }; 