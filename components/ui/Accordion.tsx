"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  expanded: string[];
  toggle: (value: string) => void;
  isMultiple?: boolean;
}

interface AccordionItemContextType {
  value: string;
}

const AccordionContext = createContext<AccordionContextType>({
  expanded: [],
  toggle: () => {},
  isMultiple: false,
});

const AccordionItemContext = createContext<AccordionItemContextType>({
  value: "",
});

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  className?: string;
  defaultValue?: string[];
}

export function Accordion({
  children,
  type = "single",
  className,
  defaultValue = [],
}: AccordionProps) {
  const [expanded, setExpanded] = useState<string[]>(defaultValue);

  const toggle = (value: string) => {
    if (type === "single") {
      setExpanded(expanded.includes(value) ? [] : [value]);
    } else {
      setExpanded(
        expanded.includes(value)
          ? expanded.filter((v) => v !== value)
          : [...expanded, value]
      );
    }
  };

  return (
    <AccordionContext.Provider
      value={{ expanded, toggle, isMultiple: type === "multiple" }}
    >
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  disabled?: boolean;
}

export function AccordionItem({
  children,
  value,
  className,
  disabled = false,
}: AccordionItemProps) {
  const { expanded } = useContext(AccordionContext);
  const isExpanded = expanded.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div
        className={cn(
          "rounded-lg border border-gray-200 dark:border-[#222F43]",
          isExpanded && "bg-gray-50 dark:bg-[#1a2333]",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function AccordionTrigger({
  children,
  className,
  disabled = false,
}: AccordionTriggerProps) {
  const { expanded, toggle } = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);
  const isExpanded = expanded.includes(item.value);

  const handleClick = () => {
    if (!disabled) {
      toggle(item.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle(item.value);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className={cn(
        "flex w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      data-state={isExpanded ? "open" : "closed"}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({
  children,
  className,
}: AccordionContentProps) {
  const { expanded } = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);
  const isExpanded = expanded.includes(item.value);

  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className={cn("px-4 pb-4 pt-0", className)}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion components must be wrapped in an Accordion component"
    );
  }
  return context;
}

export { AccordionContext, AccordionItemContext };
