"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}

export function Dropdown({
  trigger,
  children,
  align = "left",
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute z-50 mt-2 min-w-[8rem] rounded-lg bg-white dark:bg-[#131C31] shadow-lg ring-1 ring-gray-200 dark:ring-[#222F43]",
              align === "left" ? "left-0" : "right-0",
              className
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface DropdownItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

export function DropdownItem({
  children,
  disabled = false,
  className,
  ...props
}: DropdownItemProps) {
  return (
    <div
      className={cn(
        "px-4 py-2 text-sm text-[#101010] dark:text-[#94A9C9]",
        "hover:bg-gray-100 dark:hover:bg-[#1a2333] cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe400]",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface DropdownTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function DropdownTrigger({
  children,
  className,
  ...props
}: DropdownTriggerProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "px-4 py-2 text-sm font-medium",
        "bg-white dark:bg-[#131C31] border border-gray-200 dark:border-[#222F43] rounded-lg",
        "hover:bg-gray-100 dark:hover:bg-[#1a2333]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe400]",
        "transition-colors",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="w-4 h-4" />
    </button>
  );
}

interface DropdownSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DropdownSeparator({
  className,
  ...props
}: DropdownSeparatorProps) {
  return (
    <div
      className={cn("h-px my-1 bg-gray-200 dark:bg-[#222F43]", className)}
      {...props}
    />
  );
}
