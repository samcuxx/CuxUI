"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
  delay?: number;
  maxWidth?: string;
}

export default function Tooltip({
  content,
  children,
  position = "top",
  className = "",
  delay = 0.2,
  maxWidth = "200px",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  let timeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeout);
    setIsVisible(false);
  };

  const positions = {
    top: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      className: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    },
    bottom: {
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      className: "top-full left-1/2 -translate-x-1/2 mt-2",
    },
    left: {
      initial: { opacity: 0, x: 10 },
      animate: { opacity: 1, x: 0 },
      className: "right-full top-1/2 -translate-y-1/2 mr-2",
    },
    right: {
      initial: { opacity: 0, x: -10 },
      animate: { opacity: 1, x: 0 },
      className: "left-full top-1/2 -translate-y-1/2 ml-2",
    },
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={cn(
              "absolute z-50 px-2 py-1 text-sm font-medium text-white bg-[#101010] dark:bg-[#131C31] rounded-lg whitespace-normal",
              positions[position].className,
              className
            )}
            initial={positions[position].initial}
            animate={positions[position].animate}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ maxWidth }}
          >
            {content}
            <div
              className={cn(
                "absolute w-2 h-2 bg-[#101010] dark:bg-[#131C31] transform rotate-45",
                {
                  "bottom-[-4px] left-1/2 -translate-x-1/2": position === "top",
                  "top-[-4px] left-1/2 -translate-x-1/2": position === "bottom",
                  "right-[-4px] top-1/2 -translate-y-1/2": position === "left",
                  "left-[-4px] top-1/2 -translate-y-1/2": position === "right",
                }
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
