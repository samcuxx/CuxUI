"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  trigger: React.ReactNode;
  align?: "left" | "right";
}

export interface DropdownItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

export function DropdownItem({
  children,
  className,
  disabled,
  ...props
}: DropdownItemProps) {
  return (
    <button
      className={cn(
        "flex w-full items-center px-4 py-2 text-sm text-gray-700 dark:text-[#94A9C9] hover:bg-gray-100 dark:hover:bg-[#1a2333] disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export function DropdownSeparator() {
  return <div className="h-px my-1 bg-gray-200 dark:bg-[#222F43]" />;
}

export function Dropdown({
  children,
  trigger,
  align = "left",
  className,
  ...props
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
    <div
      className={cn("relative inline-block", className)}
      ref={dropdownRef}
      {...props}
    >
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
