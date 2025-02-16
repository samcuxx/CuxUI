"use client";

import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Dropdown, DropdownItem } from "./Dropdown";
import { cn } from "@/lib/utils";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return;
    onChange?.(option.value);
    setIsOpen(false);
  };

  return (
    <Dropdown
      trigger={
        <button
          className={cn(
            "flex items-center justify-between w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffe400] disabled:opacity-50",
            disabled ? "cursor-not-allowed" : "cursor-pointer",
            className
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </button>
      }
      className="w-full min-w-[8rem]"
    >
      {options.map((option) => (
        <DropdownItem
          key={option.value}
          onClick={() => handleSelect(option)}
          disabled={option.disabled}
          className={cn(
            "flex items-center justify-between",
            value === option.value && "bg-[#ffe400] bg-opacity-10"
          )}
        >
          <span>{option.label}</span>
          {value === option.value && <Check className="w-4 h-4" />}
        </DropdownItem>
      ))}
    </Dropdown>
  );
}

interface SelectGroupProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function SelectGroup({ label, children, className }: SelectGroupProps) {
  return (
    <div className={className}>
      <div className="px-2 py-1.5 text-xs font-medium text-gray-500 dark:text-[#66768f]">
        {label}
      </div>
      {children}
    </div>
  );
}
