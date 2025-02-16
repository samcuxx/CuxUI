"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  showCloseButton?: boolean;
  closeOnOutsideClick?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizes = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full",
};

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  showCloseButton = true,
  closeOnOutsideClick = true,
  size = "md",
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={closeOnOutsideClick ? onClose : undefined}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
              "w-full p-4",
              sizes[size]
            )}
          >
            <div
              className={cn(
                "relative rounded-lg bg-white dark:bg-[#131C31] shadow-lg",
                className
              )}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className={cn(
                    "absolute right-4 top-4 p-2 rounded-lg",
                    "hover:bg-gray-100 dark:hover:bg-[#1a2333]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe400]",
                    "transition-colors"
                  )}
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4 text-gray-500 dark:text-[#66768f]" />
                </button>
              )}
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ModalHeader({
  children,
  className,
  ...props
}: ModalHeaderProps) {
  return (
    <div
      className={cn(
        "px-6 py-4 border-b border-gray-200 dark:border-[#222F43]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface ModalTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function ModalTitle({ children, className, ...props }: ModalTitleProps) {
  return (
    <h2
      className={cn(
        "text-xl font-semibold text-[#101010] dark:text-[#94A9C9]",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ModalContent({
  children,
  className,
  ...props
}: ModalContentProps) {
  return (
    <div className={cn("px-6 py-4", className)} {...props}>
      {children}
    </div>
  );
}

interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ModalFooter({
  children,
  className,
  ...props
}: ModalFooterProps) {
  return (
    <div
      className={cn(
        "px-6 py-4 border-t border-gray-200 dark:border-[#222F43]",
        "flex items-center justify-end gap-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
